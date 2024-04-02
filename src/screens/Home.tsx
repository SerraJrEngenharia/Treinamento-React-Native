import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Header } from "../components/header"
import { Card } from "../components/card"
import { useState } from "react"
import { api } from "../service/api"

export default function Home() {

    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [lyric, setLyric] = useState("")

    async function getArtistData() {

        if(artist == "") {
            Alert.alert("Opa! Campo vazio.", "Digite um artista no espaço indicado.")
        }

        try {
            const response = await api.get(`/api?artist=${artist}`)
            setTitle(response.data.info.title)
            setLyric(response.data.info.lyrics)
            setImage(response.data.info.image)
        } catch (error) {
            console.log("Algo errado. Tente novamente!")
        }
    }

    return (
        <HomeContainer>
            
            <Header title="Letra aleatória" subtitle="Digite um cantor e ache uma letra aleatória do artista..." />
            
            <HTextInput
                placeholder='Digite um artista'
                value={artist}
                onChangeText={(e) => setArtist(e)}
            />

            <HButton 
                onPress={getArtistData} 
            >
                <ButtonText>Buscar</ButtonText>
            </HButton>

            {image ? (
                <Card title={title} lyric={lyric} image={image}/>
            ) : (
                <View/>
            )}

        </HomeContainer>
    )
}

import { styled } from 'styled-components/native'

const HomeContainer = styled.View`
    height: 100%;
    background-color: rgb(254 240 138);
    padding-top: 24px;
    padding: 16px;
    align-items: center;
    padding-right: 32px;
    padding-left: 32px;

`;

// w-full h-14 bg-white rounded-lg p-4 flex-row items-center gap-4 mb-4
const HTextInput = styled.TextInput`
    width: 100%;
    height: 56px;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
`;

const HButton = styled.TouchableOpacity`
    background-color: yellow;
    
    `;

// mt-4 text-lg text-yellow-700 bg-white px-8 py-2 font-bold rounded-lg hover:opacity-55 hover:duration-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)]
const ButtonText = styled.Text`
    margin-top: 8px;
    font-size: 18px;
    line-height: 28px/* 28px */;
    color: rgb(161 98 7);
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 0px;
    padding-bottom: 8px;
    font-weight: 700;
    border-radius: 8px;
    justify-content: center;
    display: flex;
    align-items: center;

    :hover{
        opacity: 55;
        transition: 500;
    }
`;