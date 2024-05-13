import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Clientes from './components/clientes/Clientes';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import Contacto from './components/Contacto/Contacto';
import About from './components/About/About';
import Ofrecemos from './components/Ofrecemos/Ofrecemos';
import Inspired from './components/Inspired/Inspired';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Customers from './components/Customers/Customers';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [entrevistas, setEntrevistas] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false); // Estado para controlar el cambio de fondo

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setBackgroundWhite(window.scrollY > window.innerHeight * 0.2); // Verifica si el scroll ha superado el 70vh inicial
  };

  useEffect(() => {
    AOS.init({
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSection = (direction) => {
    let currentSectionIndex = -1;
    const sections = ['Inicio', 'Servicios', 'About', 'Ofrecemos', 'Clientes','Inspired', 'Contacto', 'Customers', 'Footer'];
    sections.forEach((section, index) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          currentSectionIndex = index;
        }
      }
    });

    let nextSectionIndex;
    if (direction === 'up') {
      nextSectionIndex = Math.max(-1, currentSectionIndex - 1);
    } else if (direction === 'down') {
      nextSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
    }

    const nextSection = sections[nextSectionIndex];
    
    if (nextSection) {
      const element = document.getElementById(nextSection);
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <div className={`container ${backgroundWhite ? 'background-white' : ''}`}>
      <div id="Inicio">
        <NavBar />
      </div>
      <div data-aos="fade-right" className="scrollButtons">
        <button onClick={() => scrollToSection('up')}>↑</button>
        <button onClick={() => scrollToSection('down')}>↓</button>
      </div>
      <div className="wrapper">
        <div data-aos-duration="1500" data-aos="fade-right" className="cols col0">
          <h1 className='h1Index'>
            <span className='linkedin'>Linkedin</span> {' '} <br/><span className={`multiText`}>Nuestra </span> plataforma,
            <br/>
            <span className={`multiText`}>
              Tus </span> clientes 
          </h1>
          
          <div className="btns">
            <button>Demo Call</button>
          </div>
        </div>
        <div className="cols col1"></div>
      </div>
      
      <div data-aos-duration="2000" data-aos="fade-up" id="Servicios">
        <Servicios />
      </div>
      <div data-aos-duration="2000" data-aos="fade-right" id="About">
        <About />
      </div>
      <div data-aos-duration="1500"  data-aos="fade-up" id="Ofrecemos">
        <Ofrecemos />
      </div>
      <div data-aos-duration="1500" data-aos="fade-up-right" id="Clientes">
        <Clientes />
      </div>
      <div data-aos-duration="2000" data-aos="fade-up" id="Inspired">
        <Inspired />
      </div>
      <div data-aos-duration="2000" data-aos="fade-left" id='Contacto'>
        <Contacto />
      </div>
      <div data-aos-duration="2000"  data-aos="fade-up" id='Customers'>
        <Customers />
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
