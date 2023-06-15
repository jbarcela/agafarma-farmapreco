import styles from './styles.module.css';

export default function Header(){
    return(
        <div className={styles.containerHeader}>
            <div className={styles.headerPrimaryStyled}>
                <a href="mailto:atendimento@agafarma.com.br" target="_blank" className={styles.emailHeader}> atendimento@agafarmavivamed.com.br</a>
                <div className={styles.cointanerLinks}>
                        <a href="https://www.agafarma.com.br/Site/Encarte" target="_blank">Encarte Online</a>
                            <div className={styles.separator}/>
                        <a href="https://agafarma.com.br/CartaoAgafarma/Cartao-de-Credito-Agafarma" target="_blank">Cartão Pessoa Física</a>
                </div>
            </div>

            <div className={styles.headerSecondary}>
                <a href="#hero">
                    <img className={styles.logoHeader} style={{"cursor":"pointer"}} src="/images/logo.png"/>
                </a>
                <nav>
                    <ul className={styles.navUl}>
                        <li className={styles.navUlLi}><a href="#hero" className={styles.link}>INICIO</a></li>
                        <li className={styles.navUlLi}><a href="#stores" className={styles.link}>LOJAS</a></li>
                        <li className={styles.navUlLi}><a href="#contact" className={styles.link}>CONTATO</a></li>
                        <li className={styles.navUlLi}><a href="/about" className={styles.link}>SOBRE</a></li>
                        <li className={styles.navUlLi}><a href="" className={styles.link}><img src="/images/icons/facebook.png" alt="" /></a></li>
                        <li className={styles.navUlLi}><a href="" className={styles.link}><img src="/images/icons/insta.png" alt=""/></a></li>
                        <li className={styles.navUlLi}><a href="" className={styles.link}><img src="/images/icons/whats.png" alt="" /></a></li>                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}