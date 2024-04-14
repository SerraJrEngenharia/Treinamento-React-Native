import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { Header } from "../components/header"
import { Card } from "../components/card"
import { useState } from "react"
import { api } from "../service/api"

import { Loading } from "../components/loading"

type Props = TouchableOpacityProps & {
    isLoading?: boolean
}

export default function Home({isLoading = false, ...rest}:Props) {

    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [lyric, setLyric] = useState("")

    const [loader, setLoader] = useState(false)

    async function getArtistData() {

        if(artist == "") {
            Alert.alert("Opa! Campo vazio.", "Digite um artista no espaço indicado.")
        }

        
        try {
            setLoader(true)
            
            const response = await api.get(`/api?artist=${artist}`)
            setTitle(response.data.info.title)
            setLyric(response.data.info.lyrics)
            setImage(response.data.info.image)
            
            setLoader(false)

        } catch (error) {
            Alert.alert("Erro!", "Não foi possível puxar os dados!")
            console.log("Algo errado. Tente novamente!")
        }
    }

    return (
        <HomeContainer>
            
            <Header title="Letra aleatória" subtitle="Digite um cantor e ache uma letra aleatória do artista..." />
            
            <HTextInput
                placeholder='Digite um artista'
                value={artist}
                onChangeText={setArtist}
            />

            <HButton 
                onPress={getArtistData}
            >
                <ButtonText>Buscar</ButtonText>
            </HButton>

            {loader ? (
                <Loading/>
                
            ) : (
                <Card title={title} lyric={lyric} image={image}/>
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

const HTextInput = styled.TextInput`
    width: 100%;
    height: 56px;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
`;

const HButton = styled.TouchableOpacity`
    background-color: #fff;
    
`;

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