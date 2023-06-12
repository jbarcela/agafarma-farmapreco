import { ButtonHeroStyled, ContainerButtons, ContainerHero, HeroImageStiled,ImageButton } from "./styles";

export default function Hero({children}){
    return(
        <ContainerHero id="hero">
            <HeroImageStiled src="images/banner.png" alt="" />
            <ContainerButtons>
                <ButtonHeroStyled><ImageButton src="images/icons/whatsapp-btn.png" alt="" /> Parada 47</ButtonHeroStyled>
                <ButtonHeroStyled><ImageButton src="images/icons/whatsapp-btn.png" alt="" /> Parada 51</ButtonHeroStyled>
                <ButtonHeroStyled><ImageButton src="images/icons/whatsapp-btn.png" alt="" /> Americana</ButtonHeroStyled>
            </ContainerButtons>
        </ContainerHero>
    )
}