import React, { useState, useEffect } from 'react';
import style from './navBar.module.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 70) { // Cambia este valor según cuánto quieres que se desplace antes de que cambie el color
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${style.navbar} ${scrolled ? style.scrolled : ''}`}>
      <div className={style['nav-inicio']}>
        <a href="#home" className={style.link}>Inicio</a>
      </div>
      <ul className={style['nav-list']}>
        <li className={style['nav-item']}><a href="#quien-soy" className={style.link}>Quién Soy</a></li>
        <li className={style['nav-item']}><a href="#casos-de-estudio" className={style.link}>Casos de Estudio</a></li>
        <li className={style['nav-item']}><a href="#servicios" className={style.link}>Servicios</a></li>
        <li className={style['nav-item']}><a href="#contactame" className={style.link}>Contáctame</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
