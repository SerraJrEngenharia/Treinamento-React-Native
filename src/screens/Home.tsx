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
        <View className="h-full bg-yellow-200 pt-6 p-4 px-8 items-center">
            
            <Header title="Letra aleatória" subtitle="Digite um cantor e ache uma letra aleatória do artista..." />
            
            <TextInput
                className="w-full h-14 bg-white rounded-lg p-4 flex-row items-center gap-4 mb-4" 
                placeholder='Digite um artista'
                value={artist}
                onChangeText={(e) => setArtist(e)}
            />

            <TouchableOpacity 
                className=""
                onPress={getArtistData} 
            >
                <Text className="mt-4 text-lg text-yellow-700 bg-white px-8 py-2 font-bold rounded-lg hover:opacity-55 hover:duration-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">Buscar</Text>
            </TouchableOpacity>

            {image ? (
                <Card title={title} lyric={lyric} image={image}/>
            ) : (
                <Text className="items-center justify-center mt-24 font-extrabold text-xl">
                    
                </Text>
            )}

        </View>
    )
}