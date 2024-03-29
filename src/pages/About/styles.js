import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    background-color: black;
`

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    width: 95%;
    margin: 10px;
    border-radius: 20px;
    gap: 20px;
    padding: 15px;
`

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    width: 95%;
    margin: 10px;
    gap: 20px;
    border-radius: 20px;
    padding: 15px;
`

export const Button = styled.View`
    background-color: #121212;
    border: black solid 2px;
    border-radius: 40px;
    padding: 10px;
`

export const TextoTitle = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
`
export const Texto = styled.Text`
    color: white;
    text-align: justify;
    font-size: 18px;
`