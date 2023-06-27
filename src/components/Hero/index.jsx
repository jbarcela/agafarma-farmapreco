import { ButtonHeroStyled, ContainerButtons, ContainerHero, HeroImageStiled,ImageButton } from "./styles";
import banner from "../../../public/images/banner.png"
export default function Hero({children}){
    return(
        <ContainerHero >
            <a style={{display:"block",position:"relative", top:"-110px",visibility:"hidden"}} id="hero"></a>
            <HeroImageStiled  src={banner} alt="imagem do hero" width={2560} height={700} priority="false"/>
            <ContainerButtons>
                <ButtonHeroStyled title="click aqui para falar com nós no whatsapp parada 47" href="https://api.whatsapp.com/send?phone=5551999590358" target="_blank"><ImageButton  src="/images/icons/whatsapp-btn.png" alt="click aqui para falar com nós no whatsapp parada 47" /> Parada 47</ButtonHeroStyled>
                <ButtonHeroStyled title="click aqui para falar com nós no whatsapp parada 51" href="https://api.whatsapp.com/send?phone=5551996387616" target="_blank"><ImageButton  src="/images/icons/whatsapp-btn.png" alt="click aqui para falar com nós no whatsapp parada 51" /> Parada 51</ButtonHeroStyled>
                <ButtonHeroStyled title="click aqui para falar com nós no whatsapp parada Americana" href="https://api.whatsapp.com/send?phone=5551980158168" target="_blank"><ImageButton  src="/images/icons/whatsapp-btn.png" alt="click aqui para falar com nós no whatsapp parada Americana" /> Americana</ButtonHeroStyled>
            </ContainerButtons>
        </ContainerHero>
    )
}