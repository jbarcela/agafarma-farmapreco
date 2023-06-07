import { ButtonForm, ContainerContact, ContainerStyled, FormContact, InputForm, SelectForm, TitleContact, TextAreaStyled } from "./styles";
import InputMask from 'react-input-mask';

export default function Contact({ children }) {
    return (
        <ContainerContact>
            <TitleContact>Entre em contato</TitleContact>
            <FormContact action="https://formsubmit.co/dionatannsilvaa@gmail.com" method="POST">
                <InputForm required type="text" name="Nome" placeholder=" Seu nome" />
                <div style={{ "display": "flex", "widows": "100%", "justifyContent": "space-between", "gap": "10px" }}>
                    <InputMask
                        required
                        mask="(99) 9 9999-9999"
                        maskChar=""
                    >
                        {(inputProps) => <InputForm required name="Numero" type="text" style={{ "width": "100%" }} placeholder=" (99) 9 9999-9999" {...inputProps} />}
                    </InputMask>
                    <InputForm required name="E-mail" style={{ "width": "100%" }} placeholder=" Seu E-mail" />
                </div>
                <SelectForm style={{"paddingLeft":"3px"}} name="Assunto" defaultValue="Selecione">
                    <option value="Selecione" disabled hidden>Selecione um assunto</option>
                    <option value="compras">Compras</option>
                    <option value="sujestao">Sujestão</option>
                    <option value="duvidas">Duvidas</option>
                </SelectForm>
                <SelectForm style={{"paddingLeft":"3px"}} name="Loja" defaultValue="Selecione">
                    <option value="Selecione" hidden>Selecione a sua loja preferida...</option>
                    <option value="Parada-47">Parada 47</option>
                    <option value="Parada-52">Parada 52</option>
                    <option value="Americanas">Americanas</option>
                </SelectForm>
                <TextAreaStyled required name="Mensagem" placeholder=" Mensagem"></TextAreaStyled>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                <ButtonForm type="submit">Enviar</ButtonForm>
            </FormContact>
        </ContainerContact>

    )
}
