import React, {useState} from 'react';
import lupa from '../../assets/lupa.png'
import * as Style from "./style"
import Conteudo from "../Conteudo"
import axios from 'axios';
import Loader from "../Loading"


export default function Main() {
  const [input, setInput] = useState("")
  const [json, setJson] = useState({
    title:"Titulo da Música",
    lyrics:"Lyrics da Música",
    image:"https://www.photopro.com.br/imagens/raiz//GET/VINIL/ABERTURA.jpg",
  })
  const [visible, setVisible] = useState(false)

  const baseUrl = "https://lyric.mackle.im/api?artist=";
  
  const getAtor = async () => {
    if(input){
      try {
        setVisible(true)
        const response = await axios.get(`${baseUrl}${input}`);
        console.log(response.data.info);
        setVisible(false)
  
        if (response.data.status === 500) {
          throw new Error("Erro!");
        } else {
          setJson(response.data.info);
        }
        
      } catch (error) {
        console.error(error);
        alert('Erro!\n\nO artista '+ input +' não foi encontrado.');
        setInput('');
      }

    }else{
      setJson({
        title:"Titulo da Música",
        lyrics:"Lyrics da Música",
        image:"https://www.photopro.com.br/imagens/raiz//GET/VINIL/ABERTURA.jpg",
      })
    }
  }

  return (
    <Style.ViewContainer>
      <Loader visible={visible}/>
      <Style.Scroll showsVerticalScrollIndicator={false}>
        <Style.Pesquisa>
            <Style.Input placeholder="Digite o nome do Artista" placeholderTextColor="#aaaaaa"  onChangeText={(text) => setInput(text)}/>
            <Style.Botao onPress={getAtor}>
                <Style.Img source={lupa}/>
            </Style.Botao>
        </Style.Pesquisa>
        <Conteudo lyrics={json.lyrics} title={json.title} image={json.image}/>
      </Style.Scroll>
    </Style.ViewContainer>
  );
}

