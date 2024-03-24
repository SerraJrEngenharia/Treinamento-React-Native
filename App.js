import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, Image } from 'react-native';
import Api from './src/services/api'

export default function App() {

    const [artist, setArtist] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");


    async function buscarArtist(){
        if(artist == ""){
            return Alert.alert("Artista inválido!");
        }

        try {
            const response = await Api.get(`/api?artist=${artist}`)
            setLyrics(response.data.info.lyrics)
            setTitle(response.data.info.title)
            setImage(response.data.info.image)
        } catch (error) {
            console.log("ERRO" + error)
        }
    
    }

    return (
        <View style={styles.container}>

            <View style={styles.area1} >
                <Text style={styles.titulo} >Lyric</Text>
                <TextInput 
                    placeholder='Digite um artista'
                    value={artist}
                    onChangeText={(texto) => setArtist(texto)}
                    style={styles.imput}
                />
                <Button title='Buscar' onPress={buscarArtist} />
            </View>

            {image ? (
                <View style={styles.area2} >
                
                    <Text style={styles.text} >"{lyrics}"</Text>
                    <Text style={styles.text} >{title}</Text>
                    <Image source={{uri: image}} style={styles.image} />
                
                </View>) : (
                    <View style={styles.placeholder} />
                )
                }

            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imput: {
        borderWidth: 1,
        width: 200,
        margin: 20,
        padding: 15,
        borderRadius: 10,
    },
    image: {
        width: 250,
        height: 250,
    },
    area1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    area2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 8
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 8,
    },
    placeholder: {
        width: 0,
        height: 0,
    }
});
