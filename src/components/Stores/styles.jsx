import styled from "styled-components"

export const ContainerStores = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
`
export const TitleStyled = styled.h1`
    color: #283D50;
    font-size: 36px;
    font-family: 'Roboto';
    line-height: 42px;
    font-weight: 500;
    margin-top: 60px;
`

export const ParagraphStyled = styled.p`
    color: #283D50;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 15px;
    margin-top: 42px;
`

export const ContainerStoresInfo = styled.div`
    max-width: 1020px;
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;    
`