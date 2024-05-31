import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './menu.module.css';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { menuSlide } from '../NavBar/Anim.ts';

const Menu = ({ menu, setMenu }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null); // Asumiendo que inicialmente no hay ningún indicador seleccionado

  const navItems = [
    { title: "Inicio", href: "#Inicio" },
    
    { title: "Por qué A+Leads? ", href: "#Servicios" },
    { title: "Conocenos", href: "#About" },
    { title: "Servicios", href: "#Ofrecemos" },
    { title: "Inspiraciones", href: "#Inspiraciones" },
    { title: "Contacto", href: "#Contacto" },


  ];



  if (!menu) return null;

 

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
          {navItems.map((data, index) => (
            <a
              key={index}
              href={data.href} // Asumiendo que href se utiliza para definir el enlace
              className={selectedIndicator === data.href ? styles.active : ''}
              onClick={() =>{
                setSelectedIndicator(data.href)
                setMenu(false)
              } }
            >
              {data.title}
            </a>
          ))}
           <div>
         
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
