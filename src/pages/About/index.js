import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import * as styled from './styles'

export default function About() {
    const navigation = useNavigation();

    const texto = "O 'Artist and Music' se conecta a uma API "
        + "de música abrangente para buscar informações sobre artistas, "
        + "álbuns e músicas. Ao digitar o nome de um músico, o aplicativo "
        + "busca automaticamente uma imagem do álbum, uma música pertencente "
        + "a este, e até mesmo uma parte da letra, permitindo que os usuários "
        + "tenham uma amostra instantânea do trabalho do artista.";

    return (
        <styled.Container>
            <styled.Content>
                <styled.TextoTitle>Sobre o 'Artist and Music'</styled.TextoTitle>
                <styled.Texto>{texto}</styled.Texto>
            </styled.Content>
            <styled.ButtonContainer>
                <styled.Texto>Clique no botão abaixo para voltar à Página Principal:</styled.Texto>
                <TouchableOpacity onPress={ () => navigation.navigate("home") }>
                    <styled.Button>
                        <Feather
                        name='home'
                        color={'purple'}
                        size={40}
                        />
                    </styled.Button>
                </TouchableOpacity>
            </styled.ButtonContainer>
        </styled.Container>
    );


}