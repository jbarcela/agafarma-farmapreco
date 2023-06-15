import { useState } from 'react';
import styles from './styles.module.css';

export default function Header() {
    const [isSobreClicked, setIsSobreClicked] = useState(true);

    const handleSobreClick = () => {
        setIsSobreClicked(true);       
    };

    const handleNavItemClick = () => {
        setIsSobreClicked(false);
    };

    return (
        <div className={styles.containerHeader}>
            <div className={styles.headerPrimaryStyled}>
                <a href="mailto:atendimento@agafarma.com.br" target="_blank" className={styles.emailHeader}> atendimento@agafarmavivamed.com.br</a>
                <div className={styles.cointanerLinks}>
                    <a href="https://www.agafarma.com.br/Site/Encarte" target="_blank" style={{color:'#fff'}}>Encarte Online</a>
                    <div className={styles.separator} />
                    <a href="https://agafarma.com.br/CartaoAgafarma/Cartao-de-Credito-Agafarma" target="_blank" style={{color:'#fff'}}>Cartão Pessoa Física</a>
                </div>
            </div>

            <div className={styles.headerSecondary}>
                <a href="#hero">
                    <img className={styles.logoHeader} style={{ "cursor": "pointer" }} src="/images/logo.png" />
                </a>
                <nav>
                    <ul className={styles.navUl}>
                        <li className={styles.navUlLi}><a href={isSobreClicked ? '/#hero' : '/#hero'} className={styles.link} onClick={handleNavItemClick}>INICIO</a></li>
                        <li className={styles.navUlLi}><a href={isSobreClicked ? '/#stores' : '/#stores'} className={styles.link} onClick={handleNavItemClick}>LOJAS</a></li>
                        <li className={styles.navUlLi}><a href={isSobreClicked ? '/#contact' : '/#contact'} className={styles.link} onClick={handleNavItemClick}>CONTATO</a></li>
                        <li className={styles.navUlLi}><a href={isSobreClicked ? '/about' : '/about'} className={styles.link} onClick={handleSobreClick}>SOBRE</a></li>
                        <li className={styles.navUlLi}><a href="" className={styles.link}><img src="/images/icons/facebook.png" alt="" /></a></li>
                        <li className={styles.navUlLi}><a href="" className={styles.link}><img src="/images/icons/insta.png" alt="" /></a></li>
                        <li className={styles.navUlLi}><a href="" className={styles.link}><img src="/images/icons/whats.png" alt="" /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}