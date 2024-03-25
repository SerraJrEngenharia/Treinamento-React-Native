import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [artista, setArtista] = useState('');
  const [info, setInfo] = useState('');

  async function logMusic () {
    try {
      const response = await fetch("https://lyric.mackle.im/api?artist=" + artista);
      const music = await response.json();
      if (music.status === 500) throw new Error("Erro!");
      console.log(music);
      setInfo(music.info);
    } catch (error) {
      alert("Ocorreu algum erro na busca pelo artista! Tente novamente.")
      setInfo('')
    }
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.textoTitle}>Artist And Music</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='Nome do Artista'
          onChangeText={(texto) => setArtista(texto)}>
        </TextInput>
        <TouchableOpacity onPress={() => logMusic()}>
          <View style={styles.button}>
            <Text style={styles.textoButton}>Buscar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.artistContainer}>
        <Image height={150} width={150} source={{uri: info.image}}></Image>
        <Text style={styles.texto}>{(info.title) ? ('Título: ' + info.title) : ('')}</Text>
        <Text style={styles.texto}>{(info.lyrics) ? ('Letra: ' + info.lyrics) : ('')}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  artistContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'justify',
  },
  textoTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  texto: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  textoButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'purple',
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },
});