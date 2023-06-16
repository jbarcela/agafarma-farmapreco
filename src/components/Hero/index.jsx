import { ButtonHeroStyled, ContainerButtons, ContainerHero, HeroImageStiled,ImageButton } from "./styles";
import banner from "../../../public/images/banner.png"
export default function Hero({children}){
    return(
        <ContainerHero id="hero">
            <HeroImageStiled  src={banner} alt="imagem do hero" width={2560} height={700} priority="false"/>
            <ContainerButtons>
                <ButtonHeroStyled title="click aqui para falar com nós no whatsapp parada 47" href="https://api.whatsapp.com/send?phone=51996098394"><ImageButton  src="/images/icons/whatsapp-btn.png" alt="click aqui para falar com nós no whatsapp parada 47" /> Parada 47</ButtonHeroStyled>
                <ButtonHeroStyled title="click aqui para falar com nós no whatsapp parada 51" href="https://api.whatsapp.com/send?phone=51996098394"><ImageButton  src="/images/icons/whatsapp-btn.png" alt="click aqui para falar com nós no whatsapp parada 51" /> Parada 51</ButtonHeroStyled>
                <ButtonHeroStyled title="click aqui para falar com nós no whatsapp parada Americana" href="https://api.whatsapp.com/send?phone=51996098394"><ImageButton  src="/images/icons/whatsapp-btn.png" alt="click aqui para falar com nós no whatsapp parada Americana" /> Americana</ButtonHeroStyled>
            </ContainerButtons>
        </ContainerHero>
    )
}