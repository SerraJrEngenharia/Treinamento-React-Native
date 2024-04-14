import React, { useState } from "react";
import * as Style from "./styleHome"
import { useNavigation } from '@react-navigation/native'
import Loader from "../../Components/Loading"

export default function Voltar(){
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)

    function navegar(){
        setVisible(true)

        setTimeout(() => {
            navigation.navigate('Home')
            setVisible(false)
        }, 1000);
    }


    return(
        <Style.ViewContainer>
            <Loader visible={visible}/>
            <Style.Botao onPress={navegar}>
                <Style.Texto>Voltar para Home</Style.Texto>
            </Style.Botao>
        </Style.ViewContainer>
    );

}