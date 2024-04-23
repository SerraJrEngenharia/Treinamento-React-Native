import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, Image} from 'react-native';
import Api from '../../services/api'

import LottieView from 'lottie-react-native';

export default function App() {

    const [artist, setArtist] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(true);


    async function buscarArtist(){

        setLoading(true);

        if(artist == ""){
            return Alert.alert("Artista inválido!");
        }

        try {
            const response = await Api.get(`/api?artist=${artist}`)
            setLyrics(response.data.info.lyrics)
            setTitle(response.data.info.title)
            setImage(response.data.info.image)

            setLoading(false)
        } catch (error) {
            console.log("ERRO" + error)
        }
    
    }

    return (
        <Container>

            <Area1>
                <Titulo>Lyric</Titulo>
                <TextInput 
                    placeholder='Digite um artista'
                    value={artist}
                    onChangeText={(texto) => setArtist(texto)}
                    style={styles.input}
                />
                <Button title='Buscar' onPress={buscarArtist} />
            </Area1>

            {image ? (loading ? (
                <LottieView
                    source={require('../../../assets/loading.json')}
                    style={{width: "30%", height: "30%"}}
                    autoPlay
                    loop
                />
            ) : (
                <Area2>
                
                    <Texto>"{lyrics}"</Texto>
                    <Texto>{title}</Texto>
                    <Image source={{uri: image}} style={styles.image} />
                
                </Area2>
            )) : (
                    <Placeholder/>
                )
                }

            

        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
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
});

import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const Area1 = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

const Area2 = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

const Texto = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin: 8px;
`;

const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 8px;
`;

const Placeholder = styled.View`
    width: 0;
    height: 0;
`;