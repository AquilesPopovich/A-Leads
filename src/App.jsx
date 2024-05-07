import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Clientes from './components/clientes/Clientes';
import splash from './assets/marco.png';
import armu from './assets/armel.png';
import Entrevistas from './components/Entrevistas/Entrevistas';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import Contacto from './components/Contacto/Contacto';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Setter', 'Bussines', 'creativo'];
  const [entrevistas, setEntrevistas] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const sections = ['Inicio', 'Servicios', 'Clientes', 'Contacto', 'Footer']; // Agrega aquí los IDs de las secciones

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeOut(false);
      }, 500); // Espera 500ms antes de cambiar la palabra
    }, 2000); // Cambia la palabra cada 2 segundos

    return () => clearInterval(interval);
  }, [words.length]);

  const scrollToSection = (direction) => {
    let currentSectionIndex = -1;
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
    if(nextSection === 'Inicio') {
      console.log('paso')
      scrollToTop()
    }
    if (nextSection) {
      const element = document.getElementById(nextSection);
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  

  return (
    <div className="container">
      <NavBar />
      <div className="scrollButtons">
        <button onClick={() => scrollToSection('up')}>↑</button>
        <button onClick={() => scrollToSection('down')}>↓</button>
      </div>
      <div id="Inicio" className={`wrapper ${scrollY > 0 ? 'blur' : ''}`}>
        <div className="cols col0">
          <span className="topline">Hola, soy Armel</span>
          <h1 className='h1Index'>
            Y soy{' '}
            <span className={`multiText ${fadeOut ? 'fade-out' : ''}`}>
              {words[wordIndex]}
            </span>
          </h1>
          <p className='parrafoIndex'>
            Lo que te propone mi empresa es asignarte un App Setter a tu equipo, una persona encargada de llevar a cabo
            una prospección minuciosa e híper personalizada a través de tu perfil de Linkedin el cual, si necesitas ayuda,
            también te voy a ayudar a prepararlo, no tenés que hacer nada al respecto, y que tengas ese flujo de llamadas
            constante, semana a semana, dia tras dia, mes tras mes, año tras año, en el cual no sólo vas a conseguir clientes
            de altísima calidad sino también clientes capaces de comprar tu servicio.
          </p>
          <div className="btns">
            <button onClick={() => setEntrevistas(true)}>Ver entrevistas</button>
            <button> <a href="#Clientes">Ver testimonios</a> </button>
          </div>
        </div>
        <Entrevistas entrevistas={entrevistas} setEntrevistas={setEntrevistas} />
        <div className="cols col1">
          <div className="imgbox">
            <img src={splash} alt="" id="splash" />
            <img src={armu} alt="" className="imgArmu" />
          </div>
        </div>
      </div>
      <div id="Servicios">
        <Servicios />
      </div>
      <div id="Clientes">
        <Clientes />
      </div>
      <div id='Contacto' >
        <Contacto/>
      </div>
      <div id="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
