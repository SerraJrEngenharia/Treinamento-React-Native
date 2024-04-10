import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 30%;
`;


const Title = styled.Text`
  font-size: 28px;
  color: #9032BB;
  font-weight: bold;
  text-align: center;
  width: 85%;
`;

const Button = styled.TouchableOpacity`
  background-color: #9032BB;
  width: 40%;
  height: 50px;
  border-radius: 30px;
  margin: 16px;
  justify-content: center;
  color: #fff;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container >
      <Title>Diga um artista e receba um trecho de uma música!</Title>
      <Button onPress={() => navigation.navigate('Music')}>
        <ButtonText>Buscar</ButtonText>
      </Button>
    </Container>
  );
};

export default HomeScreen;
