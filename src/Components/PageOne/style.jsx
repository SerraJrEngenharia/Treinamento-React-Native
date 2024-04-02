import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.View`
    align-items: center;
    background-color: #111111;
`


export const Titulo = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom :10px;
    margin-top: 5px;
`

export const CardTextTop = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FotoSearch = styled.Image`
    width: 20px;
    height: 20px;
`

export const CardCima = styled.View`
    width: 100%;
    height: 25%;
    align-items: center;
    padding: 15px;
    border-radius: 20px;
    border-top-right-radius: 0;
    border-top-left-radius:0;
    background-color: #00FF00;
`
export const CardBaixo = styled.View`
    height: 90%;
`

export const CardArtista = styled.View`
    align-items: center;
    padding: 15px;
    margin: 10px;
    border-radius: 20px;
    background-color: #000000;
`

export const TituloArtista = styled.Text`
    width: 100%;
    font-size: 19px;
    margin-left: 40px;
    margin-top: 12px;
    margin-bottom: 7px;
    color: #696969;
    font-weight: bold;
    text-align: left;
`

export const CardLetra = styled.View`
    width: 350px;
    align-items: left;
    padding: 10px;
    margin-left: 10px;
    border-radius: 20px;
    background-color: #808080;
`

export const InputStyle = styled.TextInput`
    background-color: #ffffff;
    width: 300px;
    height: 30px;
    border-radius: 20px;
    padding-left: 20px;
`

export const Botao = styled.TouchableOpacity`
    background-color: #ffff;
    border-radius: 20px;
    width: 30px;
    height: 30px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
`

export const FotoAlbum = styled.Image`
    width: 350px;
    height: 350px;
    border-radius: 18px;
`

export const FlatList = styled.FlatList`
    flex:1;
`

export const Texto = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
`