import React from "react";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

export default function PageButton() {

    const navigation = useNavigation();

    return(
        <Container>
            <Button title='Voltar para Música' onPress={ () => navigation.navigate('AppMusic') } />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: '#000';
    justify-content: center;
    align-items: center;
`;
