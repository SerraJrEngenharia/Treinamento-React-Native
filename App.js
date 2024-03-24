import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [artista, setArtista] = useState('');
  const [info, setInfo] = useState('');

  async function logMusic () {
    const response = await fetch("https://lyric.mackle.im/api?artist=" + artista);
    const music = await response.json();
    console.log(music);
    setInfo(music.info);
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textoTitle}>Artist And Music</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Nome do Artista' onChangeText={(texto) => setArtista(texto)}></TextInput>
        <TouchableOpacity onPress={() => logMusic()}>
          <View style={styles.button}>
            <Text style={styles.textoButton}>Buscar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.artistContainer}>
        <Image height={150} width={150} source={{uri: info.image}}></Image>
        <Text style={styles.texto}>Título: {info.title}</Text>
        <Text style={styles.texto}>Letra: {info.lyrics}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  titleContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 2,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  artistContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    textAlign: 'center',
  },
  textoTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  textoButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: 'purple',
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },
});