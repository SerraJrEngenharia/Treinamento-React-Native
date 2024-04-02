import React, { useState, useEffect } from 'react';
import img from '../../assets/search.png'

import { Container, Titulo, CardCima, InputStyle, FotoSearch, 
    CardTextTop, Botao, CardBaixo, FlatList, CardArtista, FotoAlbum, 
    CardLetra, TituloArtista, Texto } from './style'
import { ActivityIndicator } from 'react-native';

export default function PageOne(){

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

    function searchMusic(){
        return(
            setArtista(input)
        )
    }

    return(
        <Container>
            <CardCima>
                <Titulo> App.fy</Titulo>

                <CardTextTop>
                    <InputStyle placeholder="Digite aqui" onChangeText={(text) => setInput(text)}/>
                    <Botao onPress={searchMusic}>
                        <FotoSearch source={img}/>
                    </Botao>
                </CardTextTop>

            </CardCima>
            
            <CardBaixo>

                {carregando ? <ActivityIndicator /> : (
                <FlatList 
                    data={dados}
                    renderItem={({item}) => (
                        <CardArtista>
                            <FotoAlbum source={{ uri: item.image }}/>
                                
                                
                            <TituloArtista>Titulo</TituloArtista>
                            <CardLetra>
                                <Texto>{ item.title }</Texto>
                            </CardLetra>

                            <TituloArtista>Letra</TituloArtista>
                            <CardLetra>
                            <Texto>{ item.lyrics }</Texto>
                            </CardLetra>
                            
                        </CardArtista>
                    )}
                />
                        
                )}          
            </CardBaixo>


        </Container>
    )
}