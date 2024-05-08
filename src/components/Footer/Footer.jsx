import styles from './footer.module.css'; 

const Footer = () => {
    return (
        <div className={styles.container}>
            
            <footer className={`${styles.footer} ${styles.bgBlack} ${styles.textWhite} ${styles.mt8} ${styles.z20} ${styles.wScreen}`}>
                <div className={`${styles.flex} ${styles.justifyEvenly} ${styles.itemsCenter} ${styles.smPx12} ${styles.px4} ${styles.bgWhite} ${styles.py7} ${styles.z20}`}>
                    <div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsEnd}`}>
                        <img src='' alt="A+Leads"/>
                        
                    </div>
                    <div>
                        <h1 className={`${styles.textXl} ${styles.fontSerif}`}>Nosotros</h1>
                        <a href='/tienda'><p>Tienda</p></a>
                        <a href='/equipo'>Equipo de desarrollo</a>
                    </div>
                    <div>
                        <h1 className={styles.textXl}>Contacto</h1>
                        <p className={styles.textSm}>+54 9 11 2849-8058</p>
                        <p className={styles.textSm}>armelamorrortu9678@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
