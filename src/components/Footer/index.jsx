import { AvaliationLink,LogoFooter, ContainerContacts,ContainerIcons, ContainerFooter, ContainerFooterSecondary, TextFooter, Textinfo, WrapperFooter, WrapperFooterSecondary, WrapperRow, ContainerMobile } from "./styles";


export default function Footer({children}){
    return(
        <>
            <ContainerFooter>
                    <WrapperFooter>
                        <WrapperRow>
                            <LogoFooter src="/images/LogoFooter.png" alt="" />
                            <AvaliationLink>NOS AVALIE AQUI!</AvaliationLink>
                            <ContainerIcons >
                                <a href=""><img src="/images/icons/facebook.png" alt="" /></a>
                                <a href=""><img src="/images/icons/insta.png" alt="" /></a>
                                <a href=""><img src="/images/icons/whats.png" alt="" /></a>                          
                            </ContainerIcons>
                        </WrapperRow>
                        <ContainerContacts>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Parada 47: <a href="tel:5136581492"  style={{ "color": "#0165CF" }} >(51) 3658-1492</a></span>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Parada 51: <a href="tel:5134115000" style={{ "color": "#0165CF" }}>(51) 3411-5000</a></span>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Americana: <a href="tel:5108001150120" style={{ "color": "#0165CF" }}>(51) 0800 115 0120</a></span>
                        </ContainerContacts>
                        <Textinfo>Horário de funcionamento: 07:30 às 22:00</Textinfo>
                        <ContainerMobile>
                            <AvaliationLink style={{display:'flex'}}>NOS AVALIE AQUI!</AvaliationLink>
                            <ContainerIcons style={{display:'flex'}} >
                                <a href=""><img src="/images/icons/facebook.png" alt="" /></a>
                                <a href=""><img src="/images/icons/insta.png" alt="" /></a>
                                <a href=""><img src="/images/icons/whats.png" alt="" /></a>                          
                            </ContainerIcons>
                        </ContainerMobile>
                    </WrapperFooter>
            </ContainerFooter>
            <ContainerFooterSecondary>
               <TextFooter>© Copyright <span style={{"fontWeight":"700","fontSize":"16px","color":"#EEEEEE"}}>Agafarma.</span> Todos os direitos reservados | * Nas compras a partir de R$ 30,00 | Desenvolvido por <span style={{"color":"#FFD602"}}>Lorem Ipsun</span></TextFooter>
            </ContainerFooterSecondary>
        </>
    )
}