import React from 'react';
import { Container, Titulo, Botao, Texto} from './style'
import { useNavigation } from '@react-navigation/native'


export default function PageTwo(){
    const navigation = useNavigation();

    return(
        <Container>
            <Titulo> Segunda Pagina</Titulo>
            <Botao title='Voltar' onPress={() => navigation.navigate('Page1')}/>
        </Container>
    )
}