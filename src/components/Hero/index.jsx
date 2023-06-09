import { ButtonHeroStyled, ContainerButtons, ContainerHero, HeroImageStiled } from "./styles";

export default function Hero({children}){
    return(
        <ContainerHero id="hero">
            <HeroImageStiled src="images/banner.png" alt="" />
            <ContainerButtons>
                <ButtonHeroStyled><img src="images/icons/whatsapp-btn.png" alt="" /> Parada 47</ButtonHeroStyled>
                <ButtonHeroStyled><img src="images/icons/whatsapp-btn.png" alt="" /> Parada 51</ButtonHeroStyled>
                <ButtonHeroStyled><img src="images/icons/whatsapp-btn.png" alt="" /> Americana</ButtonHeroStyled>
            </ContainerButtons>
        </ContainerHero>
    )
}