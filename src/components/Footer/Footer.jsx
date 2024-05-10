import React from 'react';
import styles from './footer.module.css';
import logo from '../../assets/logoPrueba.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.DivcontentIMG}><img src={logo} alt="" /> <div></div> <div></div></div>
                <div className={styles.Divcontent}>
                    <div>
                        <h3>Soluciones</h3>
                        <ul>
                            <li>CORE BANKING SOFTWARE SOLUTION</li>
                            <li>LOAN MANAGEMENT SYSTEM</li>
                            <li>REPORTING</li>
                            <li>MIFOS</li>
                            <li>FINERACT</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Compania</h3>
                        <ul>
                            <li>OUR STORY</li>
                            <li>CONTACT US</li>
                            <li>FITER READ</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Casos de Exito</h3>
                        <ul>
                            <li>Casos de Exito</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Conecta con Nosotros</h3>
                        <div className={styles.barraTop}>
                            <p>armelamorrortu9678@gmail.com</p>
                            <div className={styles.contentLinks}>
                                <ul>
                                    <li><a className={styles.link} href="https://www.linkedin.com/in/armeldeamorrortu/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a className={styles.link} href="https://www.instagram.com/armeldeamorrortu/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a className={styles.link} href=""><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Divcontent}>
                    <div>© 2024. ALL RIGHTS RESERVED.</div>
                    <div>TERMS AND CONDITIONS</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
