import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Image } from 'react-native';
import img from "./src/assets/search.png"

export default function App() {

  const [artista, setArtista] = useState('')
  const [input, setInput] = useState('')
  const [dados, setDados] = useState([])
  const [carregando, setCarregando] = useState(false)
 
  useEffect(() => {
    if (artista !== '') {
      setCarregando(true);
      fetch(`https://lyric.mackle.im/api?artist=${artista}`)
        .then((resp) => resp.json())
        .then((json) => {
          setDados([json.info]);
        })
        .catch(() => alert('Erro ao encontrar esse artista! :('))
        .finally(() => setCarregando(false));
    }
  }, [artista]);

  function searchMusic() {
    setArtista(input);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardCompleto}>
        <Text style={styles.titulo}>App.fy</Text>

        <View style={styles.caixaPesquisa}>
          <TextInput style={styles.inputStyle} placeholder="Digite aqui" onChangeText={(text) => setInput(text)} />
          <TouchableOpacity style={styles.botao} onPress={searchMusic}>
            <View>
              <Image source={img} style={styles.fotoSearch} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardMeio}>
          {carregando ? <ActivityIndicator /> : (
            <FlatList 
              data={dados} 
              renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image source={{ uri: item.image }} style={styles.fotoAlbum} /> 
                    <Text style={styles.letra}>Titulo</Text>
                    <View style={[styles.cardMeio, {backgroundColor: '#C0C0C0', width: 310, marginTop: 5}]}>
                      <Text style={styles.letra}> {item.title}</Text>
                    </View>

                    <Text style={styles.letra}>Letra</Text>
                    <View style={[styles.cardMeio, {backgroundColor: '#C0C0C0', width: 310, marginTop: 5}]}>
                      <Text style={styles.letra} numberOfLines={null}>{item.lyrics}</Text>
                    </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            /> 
          )}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  cardCompleto:{
    backgroundColor: '#11d437',
    alignItems: 'center',
    height: 650,
    borderRadius: 20,
    width: 380,
  },
  inputStyle: {
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
  },
  cardMeio: {
    padding: 12,
    backgroundColor: '#ffff',
    borderRadius: 20,
    marginTop: 15,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
  },
  fotoAlbum: {
    width: 320,
    height: 320,
    borderRadius: 18,
  },
  letra: {
    fontSize: 16,
  },
  caixaPesquisa: {
    flexDirection: 'row',
  },
  fotoSearch: {
    width: 20,
    height: 20,
  }
});