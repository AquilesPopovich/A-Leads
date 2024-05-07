import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './menu.module.css';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { menuSlide } from '../NavBar/Anim.ts';

const Menu = ({ menu, setMenu }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null); // Asumiendo que inicialmente no hay ningún indicador seleccionado

  const navItems = [
    
    { title: "Servicios", href: "#Servicios" },
    { title: "Clientes", href: "#Clientes" },
    { title: "Contacto", href: "#Contacto" }
  ];

  if (!menu) return null;

  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
    variants={menuSlide}
    initial="initial"
    animate="enter"
    exit="exit"
    className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Menu</p>
          </div>
          <button onClick={()=>scrollToTop}>Inicio</button>
          {navItems.map((data, index) => (
            <a
              key={index}
              href={data.href} // Asumiendo que href se utiliza para definir el enlace
              className={selectedIndicator === data.href ? styles.active : ''}
              onClick={() => setSelectedIndicator(data.href)}
            >
              {data.title}
            </a>
          ))}
           <div>
          <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
          <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
