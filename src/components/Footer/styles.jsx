import styled from 'styled-components'

export const ContainerFooter = styled.div`
    background-color: #F1F1F1;
    width: 100%;
    height: 100%;
    margin-top: 35px;
    display: flex;
    justify-content: center;
    padding-bottom: 35px;
    /* @media (max-width: 668px) {
        height: 100%;
    } */
`

export const WrapperFooter = styled.div`
    width: 1060px;
    padding-inline: 30px;
    max-width: 1060px;
    font-family: 'Open Sans';    
    
`

export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;  
  @media (max-width: 668px) {
        justify-content: center;
    }
`;

export const LogoFooter = styled.img`
    width: 250px;
    height: auto;
    @media (max-width: 780px) {
        width: 200px;
        height: auto;
    }
`

export const AvaliationLink = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #01649C;
    cursor: pointer;
    @media (max-width: 780px) {
        font-size: 20px;
    }
    @media (max-width: 668px) {
        display: none;
    }
`
export const ContainerIcons = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 668px) {
        display: none;
    }
`
export const ContainerContacts = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    margin-top: 28px;
    align-items: center;
    @media (max-width: 668px) {
        flex-direction: column;
    }
`
export const Textinfo = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #444444;
    margin-top: 28px;
    @media (max-width: 668px) {
        text-align: center;
        margin-bottom: 20px;
    }
`

export const ContainerFooterSecondary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84px;
    background: #00428A;
    width: 100%;
    padding-block: 10px;
`
export const TextFooter = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #EEEEEE;    
    padding-inline: 30px;
    line-height: 20px;
`

export const ContainerMobile = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-top: 48px;
    @media (max-width: 668px) {
        display: flex;
    }
`