import React from "react";
import * as Style from "./styleHome"
import { useNavigation } from '@react-navigation/native'

export default function Voltar(){

    const navigation = useNavigation();

    function navegar(){
        navigation.navigate('Home')
    }


    return(
        <Style.ViewContainer>
            <Style.Botao onPress={navegar}>
                <Style.Texto>Voltar para Home</Style.Texto>
            </Style.Botao>
        </Style.ViewContainer>
    );

}