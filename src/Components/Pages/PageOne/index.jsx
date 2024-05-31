import React, { useState, useEffect } from 'react';
import img from '../../../assets/search.png'
import LottieView from 'lottie-react-native';


import { Container, Titulo, CardCima, InputStyle, FotoSearch, 
    CardTextTop, BotaoSearch, CardBaixo, FlatList, CardArtista, FotoAlbum, 
    CardLetra, TituloArtista, Texto, BotaoPagina } from './style'
import { ActivityIndicator, Keyboard } from 'react-native';

import Api from '../../../services/api';

export default function PageOne(){

    const [artista, setArtista] = useState('')
    const [dados, setDados] = useState([])
    const [carregando, setCarregando] = useState(false)
    
    async function searchMusic(){
        if (artista !== '') {
                try{
                    setCarregando(true)
                    const response = await Api.get(`${artista}`)
                    setDados(response.data.info)
                    setCarregando(false)
                }catch(error){
                    console.log("ERRO" + error)
                }
        }else{
            alert("Digita alguém ai po!")
        }
        return (
            Keyboard.dismiss()
        )
    }

    return(
        <Container>
            <CardCima>
                <CardTextTop>
                <Titulo> App.fy</Titulo>
                </CardTextTop>

                <CardTextTop>
                    <InputStyle placeholder="Digite aqui" onChangeText={(text) => setArtista(text)}/>
                    <BotaoSearch onPress={searchMusic}>
                        <FotoSearch source={img}/>
                    </BotaoSearch>
                </CardTextTop>

            </CardCima>
            
            <CardBaixo>
                {carregando ?
                <LottieView
                    autoPlay
                    style={{
                        width: 450,
                        height: 450,
                    }}
                    source={require('../../../assets/loading.json')}
                />
                
                 :<CardArtista>
                        <FotoAlbum source={{ uri: dados.image }}/>
                                    
                        <TituloArtista>Titulo</TituloArtista>
                        <CardLetra>
                            <Texto>{ dados.title }</Texto>
                        </CardLetra>

                        <TituloArtista>Letra</TituloArtista>
                        <CardLetra>
                        <Texto>{ dados.lyrics }</Texto>
                        </CardLetra>
                    </CardArtista>
                }
            </CardBaixo>

        </Container>
    )
}