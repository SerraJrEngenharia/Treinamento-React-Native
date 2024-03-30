import React from "react";
import * as Style from "./style"


export default function Conteudo(props) {
  return (
    <Style.ViewContainer>
       {props.image && <Style.ImageAlbum source={{uri: props.image}}/>}
       {props.title && <Style.Conteudo>
            <Style.Texto>Título</Style.Texto>
            <Style.Info>{props.title}</Style.Info>
       </Style.Conteudo>}
       {props.lyrics && <Style.Conteudo>
            <Style.Texto>Lyrics</Style.Texto>
            <Style.Info>{props.lyrics}</Style.Info>
       </Style.Conteudo>}
    </Style.ViewContainer>
  );
}