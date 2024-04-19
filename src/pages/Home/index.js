import React, { useState, useRef } from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import LottieView from 'lottie-react-native'
import axios from 'axios'
import Feather from '@expo/vector-icons/Feather'
import * as styled from './styles.js'

export default function Home() {
    const [artista, setArtista] = useState('');
    const [anim, setAnim] = useState(0);
    const [info, setInfo] = useState({
      lyrics: 'Deixe-me ir',
      title: 'Preciso Me Encontrar by Cartola',
      image: "https://images.genius.com/36a0070f7300f07b06ae5495ef6c7dc1.401x400x1.jpg",
    });
    const animation = useRef(null);
  
    async function logMusic () {
      setAnim(1)
      try {
        const response = await axios.get('https://lyric.mackle.im/api?artist=' + artista)
        const music = await response.data
        if (music.status === 500) throw new Error("Erro!");
        setInfo(music.info);
      } catch (error) {
        alert("Ocorreu algum erro na busca pelo artista! Tente novamente.")
        setInfo('')
      }
      setAnim(0)
    }
  
    function Loading () {
      return !anim ? 
      (
        <styled.ArtistContainer>
          <styled.ArtistContainerFix>
            <Image height={200} width={200} source={{uri: info.image}}></Image>
          </styled.ArtistContainerFix>
          <styled.ArtistContainerFix>
            <styled.Texto>{(info.title) ? ('Título: ' + info.title) : ('')}</styled.Texto>
          <styled.Texto>{(info.lyrics) ? ('Letra: ' + info.lyrics) : ('')}</styled.Texto>
          </styled.ArtistContainerFix>
        </styled.ArtistContainer>
      )
      :
      (
        <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('./animation.json')}
        />
      )
    }


    return (
      <styled.Container>
  
        <styled.TitleContainer>
          <styled.TextoTitle>Artist And Music</styled.TextoTitle>
        </styled.TitleContainer>

        <styled.ArtistContainer>
          <Loading></Loading>
        </styled.ArtistContainer>
  
        <styled.InputContainer>
          <styled.Input placeholder='Nome do Artista' onChangeText={(texto) => setArtista(texto)}></styled.Input>
          <TouchableOpacity onPress={() => logMusic()}>
            <styled.Button>
              <Feather
                name='search'
                color={'white'}
                size={30}
              />
            </styled.Button>
          </TouchableOpacity>
        </styled.InputContainer>
  
      </styled.Container>
    );
}