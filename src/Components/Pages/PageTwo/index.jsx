import React from 'react';
import { Container, Titulo, Botao, Texto} from './style'

export default function PageTwo(){

    return(
        <Container>
            <Titulo> Segunda Pagina</Titulo>
            <Botao>
                <Texto>Voltar</Texto>
            </Botao>
        </Container>
    )
}