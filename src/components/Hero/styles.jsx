import styled from "styled-components"
import Image from "next/image"

export const ContainerHero = styled.div`
    width: 100vw;
    max-width: 100%;
    height: auto;
    position: relative;
`

export const HeroImageStiled = styled(Image)`
    width: 100%;
    height: auto;
`
export const ContainerButtons = styled.div`
    position: absolute;
    display: flex;
    gap: 30px;
    bottom: 6%;
    right: 6%;
    @media (max-width: 980px) {
        gap: 18px;
    }
    @media (max-width: 768px) {
        gap: 10px;
    }
`

export const ButtonHeroStyled = styled.a`
    font-family: 'Roboto';
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 170px;
    height: 70px;
    background-color: #FFCE0C;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    &:hover{
        opacity: 0.8;
    }
    @media (max-width: 1520px) {
        width: 140px;
        height: 60px;
        font-size: 16px;
    }
    @media (max-width: 1180px) {
        height: 50px;
    }
    @media (max-width: 980px) {
        height: 40px;
        width: 120px;
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 14px;
        gap: 5px;
        height: 35px;
    }
    @media (max-width: 668px) {
        display: none;
    }
`
export const ImageButton = styled.img`
    width: 30px;
    height: auto;
    @media (max-width: 980px) {
        width: 20px;
        height: auto;
    }
    
`