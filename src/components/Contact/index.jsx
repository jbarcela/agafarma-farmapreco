import React from 'react';
import IMaskInput  from 'react-imask';
import {
  ButtonForm,
  ContainerContact,
  FormContact,
  InputForm,
  SelectForm,
  TitleContact,
  TextAreaStyled,
  ContainerEmailname,
  StyledIMaskInput
} from './styles';

export default function Contact({ children }) {
  
  return (
    <ContainerContact id="contact">
      <TitleContact>Entre em contato</TitleContact>
      <FormContact action="https://formsubmit.co/dionatannsilvaa@gmail.com" method="POST">
        <InputForm style={{width:"auto"}} required type="text" name="Nome" placeholder="Seu nome" />
        <ContainerEmailname>
          <StyledIMaskInput
            required
            name="Numero"
            type="tel"
            mask="(00) 0 0000-0000"
            definitions={{
              '0': /[0-9]/,
            }}
            inputRef={(el) => el && el.addEventListener('focus', (e) => e.target.select())}
            placeholder="(99) 9 9999-9999"
          />
          <InputForm required name="E-mail"  placeholder="Seu E-mail" />
        </ContainerEmailname>
        <SelectForm style={{ paddingLeft: '3px' }} name="Assunto" defaultValue="Selecione">
          <option value="Selecione" disabled hidden>Selecione um assunto</option>
          <option value="compras">Compras</option>
          <option value="sujestao">Sugestão</option>
          <option value="duvidas">Dúvidas</option>
        </SelectForm>
        <SelectForm style={{ paddingLeft: '3px' }} name="Loja" defaultValue="Selecione">
          <option value="Selecione" hidden>Selecione a sua loja preferida...</option>
          <option value="Parada-47">Parada 47</option>
          <option value="Parada-52">Parada 52</option>
          <option value="Americanas">Americanas</option>
        </SelectForm>
        <TextAreaStyled required name="Mensagem" placeholder="Mensagem"></TextAreaStyled>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Seu email foi recebido com sucesso em nossa caixa de email, vamos analizar e retornaremos."></input>
        <input type="hidden" name="_next" value="https://agafarma-next-styled.vercel.app/" />
        <ButtonForm title='click aqui apra enviar o email' type="submit">Enviar</ButtonForm>
      </FormContact>
    </ContainerContact>
  );
}