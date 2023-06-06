import styled from "styled-components"

export const ContainerHero = styled.div`
    width: 100%;
    max-width: 100%;
    height: auto;
    position: relative;
`

export const HeroImageStiled = styled.img`
    width: 100%;
    height: auto;
`
export const ContainerButtons = styled.div`
    position: absolute;
    display: flex;
    gap: 30px;
    bottom: 6%;
    right: 6%;
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
`