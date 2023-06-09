import LinkNext from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";
import { CointanerLinks, HeaderPrimaryStyled, HeaderSecondary, ImageStyled, LiStyled, SeparatorStyled, UlStyled, Linkstyled, ContainerHeader } from "./styles";

export default function Header({children}){
    return(
        <ContainerHeader style={{"position":"sticky","top":"0","zIndex":"9999"}}>
            <HeaderPrimaryStyled>
                <a href="mailto:atendimento@agafarma.com.br" target="_blank" style={{"marginLeft": "18px"}}>atendimento@agafarmavivamed.com.br</a>
                <CointanerLinks>
                    <a href="https://www.agafarma.com.br/Site/Encarte" target="_blank">Encarte Online</a>
                        <SeparatorStyled/>
                    <a href="https://agafarma.com.br/CartaoAgafarma/Cartao-de-Credito-Agafarma" target="_blank">Cartão Pessoa Física</a>
                </CointanerLinks>
            </HeaderPrimaryStyled>
            <HeaderSecondary>
                <Link 
                     activeClass="active"
                     to="hero"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                >
                    <a style={{"cursor":"pointer"}}><ImageStyled src="images/logo.png"/></a> 
                </Link>
                <nav>
                    <UlStyled>
                        <LiStyled >
                            <LinkNext  href="/">
                                <Linkstyled>INÍCIO</Linkstyled>
                            </LinkNext>
                        </LiStyled>
                        <LiStyled>
                            <LinkNext href="/about">
                                <Linkstyled >SOBRE</Linkstyled>
                            </LinkNext>
                        </LiStyled>
                        <LiStyled>
                            <Link 
                                activeClass="active"
                                to="lojas"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >
                                <Linkstyled >LOJAS</Linkstyled>
                            </Link>
                        </LiStyled>
                        <LiStyled>
                            <Link
                                 activeClass="active"
                                 to="contact"
                                 spy={true}
                                 smooth={true}
                                 offset={-70}
                                 duration={500}
                            >
                                <Linkstyled >CONTATO</Linkstyled>
                            </Link>
                        </LiStyled>
                        <LiStyled><Linkstyled href=""><img src="images/icons/facebook.png" alt="" /> </Linkstyled></LiStyled>
                        <LiStyled><Linkstyled href=""><img src="images/icons/insta.png" alt="" /></Linkstyled></LiStyled>
                        <LiStyled><Linkstyled href=""><img src="images/icons/whats.png" alt="" /></Linkstyled></LiStyled>
                    </UlStyled>
                </nav>
            </HeaderSecondary>
            
        </ContainerHeader>
    )
}