import StoresCard from "../StoresCard";
import { ContainerCard } from "../StoresCard/styles";
import { ContainerStores, ContainerStoresInfo, ParagraphStyled, TitleStyled } from "./styles";

export default function Stores({children}){
    return(
        <ContainerStores id="lojas">
            <TitleStyled>Nossas lojas</TitleStyled>
            <ParagraphStyled>Selecione abaixo uma de nossas lojas em Charqueadas e São Jerônimo</ParagraphStyled>
            <ContainerStoresInfo>
                <StoresCard 
                    hrefMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.447322601825!2d-50.5314603!3d-29.822507400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518f813aaa83dd3%3A0xf228f06f01eb0958!2sR.%20Miguel%20Pereira%20dos%20Santos%2C%20250%20-%20Bom%20Princ%C3%ADpio%2C%20Santo%20Ant%C3%B4nio%20da%20Patrulha%20-%20RS%2C%2095500-000!5e0!3m2!1spt-BR!2sbr!4v1686005448438!5m2!1spt-BR!2sbr" 
                    hrefImage="agafarma.jpg" 
                    Title="Parada 47" 
                    Adress="Av. Pres. Getúlio Vargas, 1926 - Bela Vista , Alvorada, RS" 
                    Phone="(51) 3442-8610" 
                    WhatsApp="(51) 9 9959-0358" 
                    WhatsAppNumHref="51999590358"
                />
                <StoresCard 
                    hrefMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.447322601825!2d-50.5314603!3d-29.822507400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518f813aaa83dd3%3A0xf228f06f01eb0958!2sR.%20Miguel%20Pereira%20dos%20Santos%2C%20250%20-%20Bom%20Princ%C3%ADpio%2C%20Santo%20Ant%C3%B4nio%20da%20Patrulha%20-%20RS%2C%2095500-000!5e0!3m2!1spt-BR!2sbr!4v1686005448438!5m2!1spt-BR!2sbr"
                    hrefImage="agafarma.jpg"  
                    Title="Parada 51" 
                    Adress="Av. Pres. Getúlio Vargas, 2888 - Bela Vista , Alvorada, RS" 
                    Phone="(51) 3411-5000" 
                    WhatsApp="(51) 9 9638-7616" 
                    WhatsAppNumHref="51996387616"
                />
                <StoresCard 
                    hrefMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.447322601825!2d-50.5314603!3d-29.822507400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518f813aaa83dd3%3A0xf228f06f01eb0958!2sR.%20Miguel%20Pereira%20dos%20Santos%2C%20250%20-%20Bom%20Princ%C3%ADpio%2C%20Santo%20Ant%C3%B4nio%20da%20Patrulha%20-%20RS%2C%2095500-000!5e0!3m2!1spt-BR!2sbr!4v1686005448438!5m2!1spt-BR!2sbr"
                    hrefImage="agafarma.jpg" 
                    Title="Americana" 
                    Adress="Rua Tibúrcio de Azevedo, 573 - Americana, Alvorada, RS" 
                    Phone="0800 115 0120" 
                    WhatsApp="(51) 9 8015 8168" 
                    WhatsAppNumHref="51980158168"/>
            </ContainerStoresInfo>
        </ContainerStores>
    )
}