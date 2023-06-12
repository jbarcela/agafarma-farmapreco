import { ButtonHeroStyled, ContainerButtons, ContainerHero, HeroImageStiled,ImageButton } from "./styles";
import banner from "../../../public/images/banner.png"
export default function Hero({children}){
    return(
        <ContainerHero id="hero">
            <HeroImageStiled  src={banner} alt="hero" width={2560} height={700} priority="true"/>
            <ContainerButtons>
                <ButtonHeroStyled><ImageButton  src="/images/icons/whatsapp-btn.png" alt="" /> Parada 47</ButtonHeroStyled>
                <ButtonHeroStyled><ImageButton  src="/images/icons/whatsapp-btn.png" alt="" /> Parada 51</ButtonHeroStyled>
                <ButtonHeroStyled><ImageButton  src="/images/icons/whatsapp-btn.png" alt="" /> Americana</ButtonHeroStyled>
            </ContainerButtons>
        </ContainerHero>
    )
}