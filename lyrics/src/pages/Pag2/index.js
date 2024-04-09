import React from "react";
import { View, Text, StyleSheet,Button } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Pag2() {

    const navigation = useNavigation();

    return(
        <Container>
            <Button title='Voltar para Lyric' onPress={ () => navigation.navigate('Lyric') } />
        </Container>
    )
}

import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: '#000';
    justify-content: center;
    align-items: center;
`;