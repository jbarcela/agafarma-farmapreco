import { CointanerLinks,EmailHeader, HeaderPrimaryStyled, HeaderSecondary, ImageStyled, LiStyled, SeparatorStyled, UlStyled, Linkstyled, ContainerHeader } from "./styles";
export default function Header(){
    return(
        <ContainerHeader >
            <HeaderPrimaryStyled>
                <EmailHeader href="mailto:atendimento@agafarma.com.br" target="_blank" >atendimento@agafarmavivamed.com.br</EmailHeader>
                <CointanerLinks>
                    <a href="https://www.agafarma.com.br/Site/Encarte" target="_blank">Encarte Online</a>
                        <SeparatorStyled/>
                    <a href="https://agafarma.com.br/CartaoAgafarma/Cartao-de-Credito-Agafarma" target="_blank">Cartão Pessoa Física</a>
                </CointanerLinks>
            </HeaderPrimaryStyled>
            <HeaderSecondary>
                  <a href="/">
                    <ImageStyled style={{"cursor":"pointer"}} src="images/logo.png"/>
                  </a>
                <nav>
                    <UlStyled>
                        <LiStyled>
                          <Linkstyled href="#hero">INICIO</Linkstyled>
                        </LiStyled>
                        <LiStyled>
                          <Linkstyled href="#lojas">LOJAS</Linkstyled>
                        </LiStyled>
                        <LiStyled>
                          <Linkstyled href="#contact">CONTATO</Linkstyled>
                        </LiStyled>
                        <LiStyled>
                          <Linkstyled href="/about">SOBRE</Linkstyled>
                        </LiStyled>
                        <LiStyled>
                          <Linkstyled href="">
                            <img src="images/icons/facebook.png" alt="" />{' '}
                          </Linkstyled>
                        </LiStyled>
                        <LiStyled>
                          <Linkstyled href="">
                            <img src="images/icons/insta.png" alt="" />
                          </Linkstyled>
                        </LiStyled>
                        <LiStyled>
                          <Linkstyled href="">
                            <img src="images/icons/whats.png" alt="" />
                          </Linkstyled>
                        </LiStyled>
                      </UlStyled>
                </nav>
            </HeaderSecondary>            
        </ContainerHeader>
    )
}