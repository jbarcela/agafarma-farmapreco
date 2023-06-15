import styled from "styled-components"

export const ContainerHeader = styled.div`
    /* position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`

export const HeaderPrimaryStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-inline: 18px; */
    width: 100%;
    height: 30px;
    background-color: #01649C;
    color: #FFFFFF;
    font-size: 12px;
    font-family: 'Open Sans';
`
export const EmailHeader = styled.a`
    margin-left: 18px;
    @media (max-width: 668px) {
        display: none;
    }
`
export const CointanerLinks = styled.div`
    display: flex;
    gap: 18px;
    margin-right: 18px;
    @media (max-width: 668px) {
        margin-left: 12px;
    }
`
export const SeparatorStyled = styled.div`
    width: 1px;
    height: 10px;
    background-color: #fff;
    
`

export const HeaderSecondary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background-color: #FFCD00;
    @media (max-width: 668px) {
        flex-direction: column;
        height: 115px;
    }
`

export const ImageStyled = styled.img`
    width: 200px;
    height: 40px;
    @media (max-width: 920px) {
        height: 180px;
        height: auto;
        margin-top: 18px;
    }
`

export const UlStyled = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 920px) {
        gap: 20px;
        font-size: 14px;
    }
`

export const LiStyled = styled.li`
    color: #004289;
    font-family: 'Roboto';
    cursor: pointer;
    @media (max-width: 668px) {
        &:nth-last-child(-n+3) {
        display: none;
    }
    }
`
export const Linkstyled = styled.a`
    cursor: pointer;
    color: #004289;
    &:hover{
        opacity: 0.8;
    }
`
