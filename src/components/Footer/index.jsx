import { AvaliationLink,LogoFooter, ContainerContacts,ContainerIcons, ContainerFooter, ContainerFooterSecondary, TextFooter, Textinfo, WrapperFooter, WrapperFooterSecondary, WrapperRow, ContainerMobile } from "./styles";


export default function Footer({children}){
    return(
        <>
            <ContainerFooter>
                    <WrapperFooter>
                        <WrapperRow>
                            <LogoFooter src="/images/LogoFooter.png" alt="Logo Agafarma" />
                            <AvaliationLink target='_blank' href="https://api.whatsapp.com/send?phone=5551980158168" title="Click aqui e nos avalie">NOS AVALIE AQUI!</AvaliationLink>
                            <ContainerIcons >
                                <a target='_blank' href="https://www.facebook.com/" title="click aqui e entre na nossa pagina do facebook"><img src="/images/icons/facebook.png" alt="Icone do facebook" /></a>
                                <a target='_blank' href="https://www.instagram.com/" title="click aqui e entre na nossa pagina do Instagram"><img src="/images/icons/insta.png" alt="Icone do instagran" /></a>
                                <a target='_blank' href="https://api.whatsapp.com/send?phone=5551980158168" title="click aqui e entre no whatsapp"><img src="/images/icons/whats.png" alt="incone do whatsapp" /></a>                          
                            </ContainerIcons>
                        </WrapperRow>
                        <ContainerContacts>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Parada 47: <a href="tel:5136581492"  style={{ "color": "#0165CF" }} >(51) 3442-8610 </a></span>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Parada 51: <a href="tel:5134115000" style={{ "color": "#0165CF" }}>(51) 3411-5000</a></span>
                            <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Americana: <a href="tel:5108001150120" style={{ "color": "#0165CF" }}>0800 115 0120</a></span>
                        </ContainerContacts>
                        <Textinfo>Horário de funcionamento: 07:30 às 22:00</Textinfo>
                        <ContainerMobile>
                            <AvaliationLink href="https://api.whatsapp.com/send?phone=51980158168" title="click aqui para nos avaliar" style={{display:'flex'}}>NOS AVALIE AQUI!</AvaliationLink>
                            <ContainerIcons style={{display:'flex'}} >
                                <a target='_blank' href="https://www.facebook.com/" title="click aqui e entre na nossa pagina do facebook"><img src="/images/icons/facebook.png" alt="Icone do facebook" /></a>
                                <a target='_blank' href="https://www.instagram.com/" title="click aqui e entre na nossa pagina do Instagram"><img src="/images/icons/insta.png" alt="Icone do instagran" /></a>
                                <a target='_blank' href="https://api.whatsapp.com/send?phone=5551980158168" title="click aqui e entre no whatsapp"><img src="/images/icons/whats.png" alt="incone do whatsapp" /></a>                          
                            </ContainerIcons>
                        </ContainerMobile>
                    </WrapperFooter>
            </ContainerFooter>
            <ContainerFooterSecondary>
               <TextFooter>© Copyright <span style={{"fontWeight":"700","fontSize":"16px","color":"#EEEEEE"}}>Agafarma.</span> Todos os direitos reservados | Desenvolvido por <a target='_blank' href="https://api.whatsapp.com/send?phone=5551982237199" style={{"color":"#FFD602", cursor:"pointer"}}>Desenvolve Aí</a></TextFooter>
            </ContainerFooterSecondary>
        </>
    )
}