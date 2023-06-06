import { ContainerContact, ContainerStyled, FormContact, InputForm, TitleContact } from "./styles";

export default function Contact({children}){
    return(
       <ContainerContact>
            <TitleContact>Entre em contato</TitleContact>
            <FormContact>
                <InputForm placeholder=" Seu nome"/>
            </FormContact>
       </ContainerContact>
       
    )
}
