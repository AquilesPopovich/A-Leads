import styles from './footer.module.css'; 
import logo from '../../assets/logoPrueba.png'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div><img src={logo} alt="" /></div>
                <div>
                    <div>
                        <h3>Soluciones</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Compania</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Casos de Exito</h3>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Conecta con Nosotros</h3>
                        <div>
                            <p>armelamorrortu9678@gmail.com</p>
                            <div>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
