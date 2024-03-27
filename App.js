import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [songName, setSongName] = useState('');
  const [albumImage, setAlbumImage] = useState('');
  const [error, setError] = useState('');

  const buscarLetraMusica = async () => {
    try {
      const response = await fetch(`https://lyric.mackle.im/api?artist=${artist}`);
      if (response.ok) {
        const data = await response.json();
        setLyrics(data.info.lyrics);
        setArtist('');
        return;
      }
    } catch (error) {
      setError('Erro ao buscar letra da música. Por favor, tente novamente!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Random Song Lyric</Text>
        <Text style={styles.text}>Artista:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setArtist(text)}
          value={artist}
        />
          <TouchableOpacity onPress={buscarLetraMusica} style={styles.button}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
      </View>
      {lyrics ? (
        <View style={styles.resultContainer}>
          <View style={styles.imgContainer}>
            <Image source={{ uri: albumImage }} style={styles.albumImage} />
          </View>
          <View style={styles.songContainer}>
            <Text style={styles.songName}>{songName}</Text>
            <View style={styles.line}/>
            <Text style={styles.lyrics}>{lyrics}</Text>
          </View>
        </View>
      ) : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer:{
    backgroundColor: '#9032BB',
    height: 400,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  songContainer:{
    width: '40%',
    marginLeft: 15,
  },
  imgContainer:{
    borderColor: '#9032BB',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  albumImage: {
    width: 150,
    height: 150,
  },
  input: {
    backgroundColor: '#fff',
    width: '75%',
    borderRadius: 40,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5,
    paddingLeft: 30,
  },
  title:{
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80,
  },
  text:{
    color: '#DEDEDE',
    marginLeft: '14%',
    fontWeight: '700',
    fontSize: 18,
    margin: 5,
    alignSelf: 'flex-start',
  },
  buttonText:{
    color: '#fff',
    display: 'flex',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#BA7DD4',
    width: '40%',
    height: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5,
    margin: 15,
    justifyContent: 'center',
  },
  resultContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: '#BA7DD4',
    height: 2,
    margin: 3,
  },
  songName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#9032BB',
    textAlign: 'center',
  },

  lyrics: {
    textAlign: 'center',
    color: '#909090',
    fontWeight: '700',
    fontSize: 18,
  },
  error: {
    marginTop: 20,
    color: 'red',
  },
});

export default App;
