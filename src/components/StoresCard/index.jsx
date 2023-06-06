import { useState } from 'react';
import { AdressCard, ButtonMap, ContainerCard, ContainerCardInfo, ContainerContactCard, ContainerImage, ImageWhatsIcon, LinkImageWhatsIcon, TitleCard } from "./styles";

export default function StoresCard({ Title, Phone, WhatsApp, nameImage, Adress, WhatsAppNumHref, PhoneNumHref, hrefMap, hrefImage }) {
  const [exibirMapa, setExibirMapa] = useState(false);

  const exibirNoMapa = () => {
    setExibirMapa(true);
  };

  const voltar = () => {
    setExibirMapa(false);
  };

  return (
    <>
      {!exibirMapa ? (
        <ContainerCard> 
          <ButtonMap onClick={exibirNoMapa}>Ver no Mapa</ButtonMap>
          <ContainerImage src={`images/${hrefImage}`} />
          <ContainerCardInfo>
            <TitleCard>{Title}</TitleCard>
            <ContainerContactCard>
              <AdressCard>{Adress}</AdressCard>
              <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>Telefone: <a style={{ "color": "#0165CF" }} href={`tel:${PhoneNumHref}`}>{Phone}</a></span>
              <span style={{ "color": "#444444", "fontSize": "14px", "fontFamily": "Open Sans" }}>WhatsApp: <a href={`https://api.whatsapp.com/send?phone=${WhatsAppNumHref}`} style={{ "color": "#0165CF" }}>{WhatsApp}</a></span>
              <LinkImageWhatsIcon href={`https://api.whatsapp.com/send?phone=${WhatsAppNumHref}`}>
                <ImageWhatsIcon src="images/icons/whatsAppCard.png" />
              </LinkImageWhatsIcon>
            </ContainerContactCard>
          </ContainerCardInfo>
        </ContainerCard>
      ) : (
        <ContainerCard>
          <iframe
            width="100%"
            height="100%"
            src={`${hrefMap}`}
            allowFullScreen
          ></iframe>
          <ButtonMap onClick={voltar}>Voltar</ButtonMap>
        </ContainerCard>
      )}
    </>
  );
}
