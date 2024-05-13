import React, { useState, useEffect } from 'react';
import style from './navBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { AnimatePresence } from 'framer-motion';
import Menu from '../menu/Menu';
import imgLogo from '../../assets/logoPrueba.png'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

   

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`${style.container} ${scrolled ? style.scrolled : ''}`}>
      <nav className={`${style.nav} ${scrolled ? style.scrolled : ''}`}>
        <div className={style.logo}><img src={imgLogo} alt="" /></div>

        
        <ul className={`${style.navItems} ${menu ? 'open' : ''}`}>
        <li><a onClick={scrollToTop}> Inicio  </a></li>
          <li><a href="#About">Conocenos</a></li>
          <li><a href="#Ofrecemos">Servicios</a></li>
          <li><a href="#Clientes">Casos de exitos</a></li>
          <li><a href="#Inspired">Inspiraciones</a></li>
          <li><a href="#Contacto">Contacto</a></li>

        </ul>
       
        <div className={style.mobileMenuButton} onClick={toggleMenu}>
          <div className={`${style.burger} ${menu ? style.burgerActive : ""}`}></div>
        </div>

        <AnimatePresence mode='wait'>
          {menu && <Menu menu={menu} setMenu={setMenu} />}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default NavBar;
