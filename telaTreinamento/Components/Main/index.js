import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image} from 'react-native';
import lupa from '../../assets/lupa.png'
import Conteudo from '../../Components/Conteudo'

export default function Main() {
  const [input, setInput] = useState("")
  const [lyrics, setLyrics] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")

  const getAtor = () => {
    fetch("https://lyric.mackle.im/api?artist="+input)
    .then((response) => response.json())
    .then((json) => {
      setLyrics(json.info.lyrics)
      setTitle(json.info.title)
      setImage(json.info.image)
    })
    .catch(() => console.log('Erro!'))
  }

  return (
    <View style={styles.container}>
        <View style={styles.pesquisa}>
            <TextInput style={styles.input} placeholder="Nome do Artista" placeholderTextColor="#aaaaaa"  onChangeText={(text) => setInput(text)}/>
            <TouchableOpacity style={styles.botao} onPress={getAtor}>
                <Image style={styles.img} source={lupa}/>
            </TouchableOpacity>
        </View>
        <Conteudo lyrics={lyrics} title={title} image={image}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    paddingTop: 30
  },

  input:{
    backgroundColor: '#363636',
    paddingHorizontal: 15,
    paddingVertical:6,
    color: 'white',
    fontSize: 17,
    flex: 1,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 20,
},
botao:{
    backgroundColor: '#1ed760',
    marginRight: 20,
    borderRadius: 20,
    padding: 10,
    borderRadius: 20,
},
img:{
    width: 20,
    height:20,
},
pesquisa:{
    flexDirection: 'row',
    marginBottom: 40,
}
});
