import React from 'react';
import styles from './footer.module.css';
import logo from '../../assets/logoPrueba.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = ({language}) => {
    return (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.DivcontentIMG}>
              <img src={logo} alt="" /> 
              <div></div> 
              <div></div>
            </div>
            <div className={styles.Divcontent}>
              <div>
                <h3>{language === 'es' ? 'Soluciones' : 'Solutions'}</h3>
                <ul>
                  <li><a className={styles.aLi} href="#Ofrecemos">LinkedIn Organic lead-Gen</a></li>

                  <li><a className={styles.aLi} href="#Ofrecemos">LinkedIn Brand Development</a></li>

                  <li><a className={styles.aLi} href="#Ofrecemos">Talent Acquisition</a></li>

                  <li><a className={styles.aLi} href="#Ofrecemos">Trainings</a></li>

                </ul>
              </div>
              <div>
                <h3>{language === 'es' ? 'Compañía' : 'Company'}</h3>
                <ul>
                  <li> <a className={styles.aLi} href="#About"> {language === 'es' ? 'NUESTRA HISTORIA' : 'OUR STORY'}</a></li>
                  <li> <a className={styles.aLi} href="#Contacto">{language === 'es' ? 'CONTÁCTENOS' : 'CONTACT US'}</a></li>
                  <li> <a className={styles.aLi} href="#Servicios">{language === 'es' ? 'Porque A+Leads?' : 'Why A+Leads?'}</a></li>

                </ul>
              </div>
              <div>
                <h3>{language === 'es' ? 'Casos de Éxito' : 'Success Cases'}</h3>
                <ul>
                  <li><a className={styles.aLi} href="#Clientes">{language === 'es' ? 'Testimonios' : 'testimonials'}</a></li>
                  <li><a className={styles.aLi} href="#Customers">{language === 'es' ? 'Todas las empresas' : 'All companies '}</a></li>
                </ul>
              </div>
              <div>
                <h3>{language === 'es' ? 'Conéctate con Nosotros' : 'Connect with Us'}</h3>
                <div className={styles.barraTop}>
                  <p><a className={styles.aLi} href="mailto:armelamorrortu9678@gmail.com">armelamorrortu9678@gmail.com</a></p>
                  <div className={styles.contentLinks}>
                    <ul>
                      <li><a className={styles.link} target="_blank" href="https://www.linkedin.com/in/armeldeamorrortu/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                      <li><a className={styles.link} target="_blank" href="https://www.instagram.com/arme.leads?igsh=OGZoYTliNjI0eGRj"><FontAwesomeIcon icon={faInstagram} /></a></li>
                      <li><a className={styles.link} target="_blank" href="https://youtube.com/@armel9678.?si=1q5GjjjxOY_gYe7-"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Divcontent}>
              <div>© 2024. {language === 'es' ? 'TODOS LOS DERECHOS RESERVADOS.' : 'ALL RIGHTS RESERVED.'}</div>
              <div>{language === 'es' ? 'TÉRMINOS Y CONDICIONES' : 'TERMS AND CONDITIONS'}</div>
            </div>
          </div>
        </div>
      );
      
};

export default Footer;
