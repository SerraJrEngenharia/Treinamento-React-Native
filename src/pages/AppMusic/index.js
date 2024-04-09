import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import Api from '../../services/api'

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
        <Container>

            <ContainerTitulo>
                <Titulo>Música</Titulo>
                <StyledTextInput 
                    placeholder='Digite um artista'
                    value={artist}
                    onChangeText={(texto) => setArtist(texto)}
                />
                <Button title='Buscar' onPress={buscarArtist} />
            </ContainerTitulo>

            {image ? (
                <ContainerTexto>
                
                    <Texto>"{lyrics}"</Texto>
                    <Texto>{title}</Texto>
                    <StyledImage source={{uri: image}} />
                
                </ContainerTexto>) : (
                    <Placeholder/>
                )
                }

        </Container>
    );
}

import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const ContainerTitulo = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 8px;
`;

const StyledTextInput = styled.TextInput`
        border-width: 1px;
        width: 200px;
        margin: 20px;
        padding: 15px;
        border-radius: 10px;
`;

const Placeholder = styled.View`
    width: 0;
    height: 0;
`;

const ContainerTexto = styled.View`
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

const StyledImage = styled.Image`
        height: 200px;
        width: 200px;
`;