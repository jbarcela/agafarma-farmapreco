import { AvaliationLink,LogoFooter, ContainerContacts,ContainerIcons, ContainerFooter, ContainerFooterSecondary, TextFooter, Textinfo, WrapperFooter, WrapperFooterSecondary, WrapperRow, ContainerMobile } from "./styles";


export default function Footer({children}){
    return(
        <>
            <ContainerFooter>
                    <WrapperFooter>
                        <WrapperRow>
                            <LogoFooter src="/images/LogoFooter.png" alt="Logo Agafarma" />
                            <AvaliationLink title="Click aqui e nos avalie">NOS AVALIE AQUI!</AvaliationLink>
                            <ContainerIcons >
                                <a href="" title="click aqui e entre na nossa pagina do facebook"><img src="/images/icons/facebook.png" alt="Icone do facebook" /></a>
                                <a href="" title="click aqui e entre na nossa pagina do Instagram"><img src="/images/icons/insta.png" alt="Icone do instagran" /></a>
                                <a href="" title="click aqui e entre no whatsapp"><img src="/images/icons/whats.png" alt="incone do whatsapp" /></a>                          
                            </ContainerIcons>
                        </WrapperRow>
                        <ContainerContacts>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Parada 47: <a href="tel:5136581492"  style={{ "color": "#0165CF" }} >(51) 3658-1492</a></span>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Parada 51: <a href="tel:5134115000" style={{ "color": "#0165CF" }}>(51) 3411-5000</a></span>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Americana: <a href="tel:5108001150120" style={{ "color": "#0165CF" }}>(51) 0800 115 0120</a></span>
                        </ContainerContacts>
                        <Textinfo>Horário de funcionamento: 07:30 às 22:00</Textinfo>
                        <ContainerMobile>
                            <AvaliationLink title="click aqui para nos avaliar" style={{display:'flex'}}>NOS AVALIE AQUI!</AvaliationLink>
                            <ContainerIcons style={{display:'flex'}} >
                                <a href="" title="click aqui e entre na nossa pagina do facebook"><img src="/images/icons/facebook.png" alt="Icone do facebook" /></a>
                                <a href="" title="click aqui e entre na nossa pagina do Instagram"><img src="/images/icons/insta.png" alt="Icone do instagran" /></a>
                                <a href="" title="click aqui e entre no whatsapp"><img src="/images/icons/whats.png" alt="incone do whatsapp" /></a>                          
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