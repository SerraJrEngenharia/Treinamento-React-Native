import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const TopContainer = styled.View`
  background-color: #9032BB;
  height: 400px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  background-color: #fff;
  width: 75%;
  border-radius: 40px;
  height: 60px;

  padding-left: 30px;
`;

const Title = styled.Text`
  font-size: 34px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 80px;
`;

const TextLabel = styled.Text`
  color: #DEDEDE;
  font-weight: 700;
  font-size: 18px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #BA7DD4;
  width: 40%;
  height: 50px;
  border-radius: 30px;
  margin: 15px;
  justify-content: center;
`;

const ResultContainer = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ImgContainer = styled.View`
  border-color: #9032BB;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 7px;
`;

const AlbumImage = styled.Image`
  width: 150px;
  height: 150px;
`;

const SongContainer = styled.View`
  width: 40%;
  margin-left: 15px;
`;

const Line = styled.View`
  background-color: #BA7DD4;
  height: 2px;
  margin: 3px;
`;

const SongName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #9032BB;
  text-align: center;
`;

const Lyrics = styled.Text`
  text-align: center;
  color: #909090;
  font-weight: 700;
  font-size: 18px;
`;

const ErrorText = styled.Text`
  margin-top: 20px;
  color: red;
`;

const MusicScreen = ({ navigation }) => {
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [songName, setSongName] = useState('');
  const [albumImage, setAlbumImage] = useState('');
  const [error, setError] = useState('');

  const buscarLetraMusica = async () => {
    try {
      const response = await fetch(`https://lyric.mackle.im/api?artist=${artist}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar letra da música.');
      }
      const data = await response.json();
      setLyrics(data.info.lyrics);
      setSongName(data.info.title);
      setAlbumImage(data.info.image);
      setError('');
      setArtist('');
    } catch (error) {
      setError('Erro ao buscar letra da música. Por favor, tente novamente.');
    }
  };

  return (
    <Container>
      <TopContainer>
        <Title>Random Song Lyric</Title>
        <TextLabel>Artista:</TextLabel>
        <Input
          onChangeText={text => setArtist(text)}
          value={artist}
        />
        <Button onPress={buscarLetraMusica}>
          <ButtonText>Buscar</ButtonText>
        </Button>
      </TopContainer>
      {lyrics ? (
        <ResultContainer>
          <ImgContainer>
            <AlbumImage source={{ uri: albumImage }} />
          </ImgContainer>
          <SongContainer>
            <SongName>{songName}</SongName>
            <Line />
            <Lyrics>{lyrics}</Lyrics>
          </SongContainer>
        </ResultContainer>
      ) : null}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};

export default MusicScreen;
