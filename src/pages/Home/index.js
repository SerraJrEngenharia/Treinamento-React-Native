import React, { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import * as styled from './styles.js'

export default function Home() {
    const [artista, setArtista] = useState('');
    const [info, setInfo] = useState({
      lyrics: 'Deixe-me ir',
      title: 'Preciso Me Encontrar by Cartola',
      image: "https://images.genius.com/36a0070f7300f07b06ae5495ef6c7dc1.401x400x1.jpg",
    });
  
    async function logMusic () {
      try {
        const response = await fetch("https://lyric.mackle.im/api?artist=" + artista);
        const music = await response.json();
        if (music.status === 500) throw new Error("Erro!");
        setInfo(music.info);
      } catch (error) {
        alert("Ocorreu algum erro na busca pelo artista! Tente novamente.")
        setInfo('')
      }
    }
  
    return (
      <styled.Container>
  
        <styled.TitleContainer>
          <styled.TextoTitle>Artist And Music</styled.TextoTitle>
        </styled.TitleContainer>

        <styled.ArtistContainer>
          <styled.ArtistContainerFix>
            <Image height={200} width={200} source={{uri: info.image}}></Image>
          </styled.ArtistContainerFix>
          <styled.ArtistContainerFix>
            <styled.Texto>{(info.title) ? ('Título: ' + info.title) : ('')}</styled.Texto>
            <styled.Texto>{(info.lyrics) ? ('Letra: ' + info.lyrics) : ('')}</styled.Texto>
          </styled.ArtistContainerFix>
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