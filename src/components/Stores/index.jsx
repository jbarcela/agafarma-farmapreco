import StoresCard from "../StoresCard";
import { ContainerCard } from "../StoresCard/styles";
import { ContainerStores, ContainerStoresInfo, ParagraphStyled, TitleStyled } from "./styles";

export default function Stores({children}){
    return(
        <ContainerStores>
            <a style={{display:"block",position:"relative", top:"-110px",visibility:"hidden"}} id="stores"></a>
            <TitleStyled>Nossas lojas</TitleStyled>
            <ContainerStoresInfo>
                <StoresCard 
                    hrefMap="https://goo.gl/maps/By4YMixpdT1dtSjK8" 
                    hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.246665350064!2d-51.079031699999994!3d-30.0010729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975c65fe22691%3A0x3fd15078222b6df4!2sAgafarma%20parada%2047%20em%20Alvorada!5e0!3m2!1spt-BR!2sbr!4v1687814861336!5m2!1spt-BR!2sbr"
                    hrefImage="agafarma.webp" 
                    Title="Parada 47" 
                    Adress="Av. Pres. Getúlio Vargas, 1926 - Bela Vista, Alvorada - RS" 
                    Phone="(51) 3442-8610" 
                    WhatsApp="(51) 9 9959-0358" 
                    WhatsAppNumHref="5551999590358"
                    ourPhoneNumHref="0800 051 2010"
                />
                <StoresCard 
                    hrefMap="https://goo.gl/maps/yPiatj2e9Jqc5cAQ9"
                    hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.418013634361!2d-51.0712696!3d-29.9961514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979aba127bd4d%3A0x53a983a433e858ff!2sAgafarma%2051!5e0!3m2!1spt-BR!2sbr!4v1687814895172!5m2!1spt-BR!2sbr"
                    hrefImage="agafarma.jpg"  
                    Title="Parada 51" 
                    Adress="Av. Pres. Getúlio Vargas, 2888 - Bela Vista, Alvorada - RS" 
                    Phone="(51) 3411-5000" 
                    WhatsApp="(51) 9 9638-7616" 
                    WhatsAppNumHref="5551996387616"
                    
                />
                <StoresCard 
                    hrefMap="https://goo.gl/maps/1tH7cvD47aXbfqGt7"
                    hreflinkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.559884573749!2d-51.082916000000004!3d-29.992076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975cd03a6cd6d%3A0x6ab423fe8ed1865a!2sAgafarma%20da%20Americana!5e0!3m2!1spt-BR!2sbr!4v1687814662003!5m2!1spt-BR!2sbr"
                    hrefImage="agafarma.jpg" 
                    Title="Americana" 
                    Adress="R. Tibúrcio de Azevedo, 573 - Americana, Alvorada - RS" 
                    Phone="(51) 9 8015 8168" 
                    ourPhoneNumHref="0800 115 0120"
                    WhatsApp="(51) 9 8015 8168" 
                    WhatsAppNumHref="5551980158168"/>
            </ContainerStoresInfo>
        </ContainerStores>
    )
}