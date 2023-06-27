import Container from "../../components/Container";
import styles from "./styles.module.css"
export default function About(){
    return(
        <Container>
            <div className={styles.containerColor}>
                <h1 className={styles.titleAbout}>Uma história familiar construída no amor em cuidar</h1>
                <div className={styles.contentAbout}>
                    <p className={styles.textContent}>
                        Tudo começou a partir do sonho do empreendedor Joelson Andrade, que sempre almejou ter a sua própria farmácia.
                        Com apoio de seus pais, em 1989, na capital gaúcha, esse sonho tornou-se realidade, surgindo a Drogaria Ingá. Avistando novas cidades, Joelson adquiriu a Farmácia Econômica em 1991 na parada 51 de Alvorada. Com sua visão sempre empreendedora, abriu mais uma farmácia em 1997 na parada 47, a Drogaria Farmapreço. 
                    </p>
                    <img className={styles.imgContent} src="/images/farmapreco.jpg" alt="" />
                </div>
            </div>
            <div className={styles.containerIncolor}>
                <h1 className={styles.titleAbout}>Nasce a Agafarma</h1>
                <div className={styles.contentAbout}>
                    <img className={styles.imgContent} src="/images/nasceAgafarma.jpg" alt="" />
                    <p style={{color:"#4EAED9"}} className={styles.textContent}>                        
                        Como estratégia de fortalecimento no setor farmacêutico, pequenos empresários se uniram e fundaram uma Rede Associativista de Farmácia, a qual Joelson deu o nome de Agafarma.
                        Crescemos com um amplo mix de produtos, implantamos a primeira tele-entrega de medicamentos em Alvorada e nos mudamos para uma loja mais ampla em 2001. Nossa história no bairro Americana iniciou em 2002, quando Anderson Andrade, o primogênito de Joelson, assumiu o comando desta farmácia.
                    </p>
                </div>
            </div>
            <div className={styles.containerColor}>
                <h1 className={styles.titleAbout}>Tradição Familiar</h1>
                <div className={styles.contentAbout}>
                    <p className={styles.textContent}>
                        Em 2007 se formou como farmacêutica a filha Aline Andrade, que recebeu todos ensinamentos pelo irmão Anderson para gerenciar a loja da parada 51.
                    </p>
                    <img className={styles.imgContent} src="/images/tradicaoFamiliar.jpg" alt="" />
                </div>
            </div>
            <div className={styles.containerIncolor}>
                <h1 className={styles.titleAbout}>A segunda geração</h1>
                <div className={styles.contentAbout}>
                    <img className={styles.imgContent} src="/images/segundaGeracao.jpg" alt="" />
                    <p style={{color:"#4EAED9"}} className={styles.textContent}>                        
                        Por mais de 30 anos temos uma história de reconhecimento e tradição consolidada em Alvorada. Em março de 2021, no auge da pandemia por coronavírus, perdemos nosso diretor Joelson. Atualmente o Grupo Farmapreço é comandado pelos irmãos Anderson e Aline. 
                    </p>
                </div>
            </div>
            <div className={styles.containerColor}>
                <h1 className={styles.titleAbout}>Cuida com o coração</h1>
                <div className={styles.contentAbout}>
                    <p className={styles.textContent}>
                        Contamos com uma equipe altamente qualificada para atender os Alvoradenses, como muito carinho a atenção. Nossas lojas possuem espaço clínico, se destacando na cidade como referência em atenção farmacêutica.
                    </p>
                    <img className={styles.imgContent} src="/images/historiaFamiliar.jpg" alt="" />
                </div>
            </div>
        </Container>
    )
}