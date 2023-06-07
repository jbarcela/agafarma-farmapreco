import styled from "styled-components"

export const ContainerContact = styled.div`
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 920px;
    
`
export const TitleContact = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #283D50;
    margin-top: 70px;
`

export const FormContact = styled.form`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const InputForm = styled.input`
    border: none;
    border: solid 1px #CED4DA;
    border-radius: 6px;
    height: 38px;
    padding-left: 7px;
    &::placeholder {
    color: black;
  }
`
export const SelectForm = styled.select`
    width: 100%;
    border: none;
    border: solid 1px #CED4DA;
    border-radius: 6px;
    height: 38px;
`

export const ButtonForm = styled.button`
    margin-inline: auto;
    margin-top: 20px;
    width: 120px;
    height: 50px;
    left: 900px;
    top: 2225px;
    background: #01649C;
    border: none;
    border-radius: 12px;
    color: #CED4DA;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
`
export const TextAreaStyled = styled.textarea`
    height: 110px;
    max-width: 920px;
    resize: none;
    border-radius: 6px;
    border: solid 1px #CED4DA;
    padding-left: 5px;
    &::placeholder {
        color: black;
     }
`