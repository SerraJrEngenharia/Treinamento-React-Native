import React, {useState} from 'react';
import lupa from '../../assets/lupa.png'
import * as Style from "./style"
import Conteudo from "../Conteudo"



export default function Main() {
  const [input, setInput] = useState("")
  const [json, setJson] = useState("")

  const getAtor = async () => {
    try{

      const data = await fetch("https://lyric.mackle.im/api?artist="+input).then((response) => response.json())
      if (data.status === 500) throw new Error("Erro."); // Caso não encontre nenhuma letra do artista digitado, lança um erro e não atualiza o songData.
      setJson(data.info);

    } catch (error) {

      alert('Erro!\n\nO artista '+ input +' não foi encontrado.');
      setInput('')

    }
  }

  return (
    <Style.ViewContainer>
      <Style.Scroll showsVerticalScrollIndicator={false}>
        <Style.Pesquisa>
            <Style.Input placeholder="Nome do Artista" placeholderTextColor="#aaaaaa"  onChangeText={(text) => setInput(text)}/>
            <Style.Botao onPress={getAtor}>
                <Style.Img source={lupa}/>
            </Style.Botao>
        </Style.Pesquisa>
        <Conteudo lyrics={json.lyrics} title={json.title} image={json.image}/>
      </Style.Scroll>
    </Style.ViewContainer>
  );
}

