import styled from 'styled-components/native';

export const ViewContainer = styled.View`
    flex: 1;
    background-color: #151515;
    align-items: center;
`;

export const Scroll = styled.ScrollView`
    flex: 1;
    padding-top: 30px;
    width: 100%;
`;

export const Input = styled.TextInput`
    background-color: #363636;
    padding:6px 15px;
    color: white;
    font-size: 17px;
    flex: 1;
    margin-left: 20px;
    margin-right: 10px;
    border-radius: 20px;
`;

export const Botao = styled.TouchableOpacity`
    background-color: #1ed760;
    margin-right: 20px;
    border-radius: 20px;
    padding: 10px;
    border-radius: 20px;
`;
export const Pesquisa = styled.View`
    flex-direction: row;
    margin-bottom: 40px;
`;

export const Img = styled.Image`
    width: 20px;
    height: 20px;
`;
