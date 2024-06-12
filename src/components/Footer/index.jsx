import { ContainerContact } from "../Contact/styles";
import {
  AvaliationLink,
  LogoFooter,
  ContainerContacts,
  ContainerIcons,
  ContainerFooter,
  ContainerFooterSecondary,
  TextFooter,
  Textinfo,
  WrapperFooter,
  WrapperFooterSecondary,
  WrapperRow,
  ContainerMobile,
} from "./styles";

export default function Footer({ children }) {
  return (
    <>
      <ContainerFooter id="contact">
        <WrapperFooter>
          <WrapperRow>
            <LogoFooter src="/images/LogoFooter.png" alt="Logo Agafarma" />
            <AvaliationLink
              target="_blank"
              href="https://www.google.com/search?q=Agafarma+parada+47+em+Alvorada&oq=Agafarma+parada+47+em+Alvorada&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQcxMzVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x951975c65fe22691:0x3fd15078222b6df4,1,,,,"
              title="Click aqui e nos avalie"
            >
              NOS AVALIE AQUI!
            </AvaliationLink>
            <ContainerIcons>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063737311089&mibextid=avESrC"
                title="Entre na nossa pagina do facebook"
              >
                <img src="/images/icons/facebook.png" alt="Icone do facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/agafarmaalvorada/?igshid=NzZlODBkYWE4Ng%3D%3D"
                title="Entre na nossa pagina do Instagram"
              >
                <img src="/images/icons/insta.png" alt="Icone do instagran" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5551996387616"
                title="Entre no whatsapp"
              >
                <img src="/images/icons/whats.png" alt="incone do whatsapp" />
              </a>
            </ContainerIcons>
          </WrapperRow>
          <ContainerContacts>
            <span
              style={{
                color: "#444444",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "bold",
              }}
            >
              Parada 47:{" "}
              <a
                href="tel:5136581492"
                style={{ color: "#0165CF", fontWeight: "normal" }}
              >
                (51) 3442-8610{" "}
              </a>
            </span>
            <span
              style={{
                color: "#444444",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "bold",
              }}
            >
              Parada 51:{" "}
              <a
                href="tel:5134115000"
                style={{ color: "#0165CF", fontWeight: "normal" }}
              >
                (51) 3411-5000
              </a>
            </span>
            <span
              style={{
                color: "#444444",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "bold",
              }}
            >
              Americana:{" "}
              <a
                href="tel:5108001150120"
                style={{ color: "#0165CF", fontWeight: "normal" }}
              >
                0800 115 0120
              </a>
              <p></p>
            </span>
          </ContainerContacts>

          <Textinfo>Horário de funcionamento:</Textinfo>
          <ContainerContacts style={{ marginTop: "10px" }}>
            <p
              style={{
                color: "#444444",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "bold",
              }}
            >
              Parada 47:{" "}
              <span style={{ fontWeight: "normal" }}>08:00 às 23:55</span>
            </p>
            <p
              style={{
                color: "#444444",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "bold",
              }}
            >
              Parada 51:{" "}
              <span style={{ fontWeight: "normal" }}>08:00 às 23:55</span>
            </p>
            <p
              style={{
                color: "#444444",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "bold",
              }}
            >
              Americana:{" "}
              <span style={{ fontWeight: "normal" }}>08:00 às 22:00</span>
            </p>
          </ContainerContacts>
          <Textinfo>
            Entregas terminam 30 minutos antes de fechar as lojas.
          </Textinfo>

          <ContainerMobile>
            <AvaliationLink
              href="https://www.google.com/search?q=Agafarma+parada+47+em+Alvorada&oq=Agafarma+parada+47+em+Alvorada&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQcxMzVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x951975c65fe22691:0x3fd15078222b6df4,1,,,,"
              title="click aqui para nos avaliar"
              style={{ display: "flex" }}
            >
              NOS AVALIE AQUI!
            </AvaliationLink>
            <ContainerIcons style={{ display: "flex" }}>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063737311089&mibextid=avESrC"
                title="Entre na nossa pagina do facebook"
              >
                <img src="/images/icons/facebook.png" alt="Icone do facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/agafarmaalvorada/?igshid=NzZlODBkYWE4Ng%3D%3D"
                title="?Entre na nossa pagina do Instagram"
              >
                <img src="/images/icons/insta.png" alt="Icone do instagran" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5551996387616"
                title="Entre no whatsapp"
              >
                <img src="/images/icons/whats.png" alt="incone do whatsapp" />
              </a>
            </ContainerIcons>
          </ContainerMobile>
        </WrapperFooter>
      </ContainerFooter>
      <ContainerFooterSecondary>
        <TextFooter>
          © Copyright{" "}
          <span
            style={{ fontWeight: "700", fontSize: "16px", color: "#EEEEEE" }}
          >
            Agafarma.
          </span>{" "}
          Todos os direitos reservados | Desenvolvido por{" "}
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5551982237199"
            style={{ color: "#FFD602", cursor: "pointer" }}
          >
            Desenvolve Aí
          </a>
        </TextFooter>
      </ContainerFooterSecondary>
    </>
  );
}
