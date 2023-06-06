import { CointanerLinks, HeaderPrimaryStyled, HeaderSecondary, ImageStyled, LiStyled, SeparatorStyled, UlStyled, Linkstyled } from "./styles";

export default function Header({children}){
    return(
        <>
        <HeaderPrimaryStyled>
            <a href="mailto:atendimento@agafarma.com.br" target="_blank" style={{"marginLeft": "18px"}}>atendimento@agafarmavivamed.com.br</a>
            <CointanerLinks>
                <a href="https://www.agafarma.com.br/Site/Encarte" target="_blank">Encarte Online</a>
                    <SeparatorStyled/>
                <a href="https://agafarma.com.br/CartaoAgafarma/Cartao-de-Credito-Agafarma" target="_blank">Cartão Pessoa Física</a>
            </CointanerLinks>
        </HeaderPrimaryStyled>
        <HeaderSecondary>
            <ImageStyled src="images/logo.png"/>
            <nav>
                <UlStyled>
                    <LiStyled><Linkstyled href="#inicio">INÍCIO</Linkstyled></LiStyled>
                    <LiStyled><Linkstyled href="">SOBRE</Linkstyled></LiStyled>
                    <LiStyled><Linkstyled href="#lojas">LOJAS</Linkstyled></LiStyled>
                    <LiStyled><Linkstyled href="">CONTATO</Linkstyled></LiStyled>
                    <LiStyled><Linkstyled href=""><img src="images/icons/facebook.png" alt="" /> </Linkstyled></LiStyled>
                    <LiStyled><Linkstyled href=""><img src="images/icons/insta.png" alt="" /></Linkstyled></LiStyled>
                    <LiStyled><Linkstyled href=""><img src="images/icons/whats.png" alt="" /></Linkstyled></LiStyled>
                </UlStyled>
            </nav>
        </HeaderSecondary>
        </>
    )
}