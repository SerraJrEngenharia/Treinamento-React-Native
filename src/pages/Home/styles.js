import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: black;
`

export const TextoTitle = styled.Text`
    color: white;
    font-size: 36px;
    font-family: serif;
    font-weight: bold;
`

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ArtistContainer = styled.View`
  flex: 4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  background-color: #121212;
  border-radius: 20px;
  width: 95%;
`

export const ArtistContainerFix = styled.View`
  flex: 1;
  margin-top: 20px;
`

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  gap: 10px;
`

export const Texto = styled.Text`
  margin: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
  font-family: serif;
  `

export const Input = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  margin-top: 30px;
  padding-right: 50px;
  padding-left: 50px;
  font-size: 18px;
  font-weight: bold;
`

export const Button = styled.View`
  background-color: purple;
  margin-top: 30px;
  border-radius: 20px;
  padding-right: 10px;
  padding-left: 10px;
`