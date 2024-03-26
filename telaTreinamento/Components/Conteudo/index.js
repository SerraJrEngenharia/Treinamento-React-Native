import React from "react";
import { StyleSheet, Image, View, Text } from 'react-native';


export default function Conteudo(props) {
  return (
    <View style={styles.container}>
       {props.image && <Image style={styles.imagemAlbum} source={{uri: props.image}}/>}
       {props.title && <View style={styles.conteudo}>
            <Text style={styles.texto}>Título</Text>
            <Text style={styles.info}>{props.title}</Text>
       </View>}
       {props.lyrics && <View style={styles.conteudo}>
            <Text style={styles.texto}>Lyrics</Text>
            <Text style={styles.info}>{props.lyrics}</Text>
       </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",

    
  },
  imagemAlbum:{
    width: 340,
    height: 340,
  },
  texto: {
    color: '#555555',
    fontSize: 16,
    marginBottom: 5,

  },
  info:{
    color: '#ffffff',
    fontSize: 18,
  },
  conteudo:{
    backgroundColor: '#363636',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 8,
    width: 340,
  }


});
