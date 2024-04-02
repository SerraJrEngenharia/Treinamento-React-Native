import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


export default function Second() {

    const {navigate} = useNavigation()

    function handleNavigation() {
        navigate('Home')
    }

    return (
        <SecondContainer>
            <Button title="Voltar pra Home" onPress={handleNavigation} />
        </SecondContainer>
    )
}

import { styled } from 'styled-components/native'

const SecondContainer = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

