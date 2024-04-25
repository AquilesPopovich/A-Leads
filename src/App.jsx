import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/About/About';
import Clientes from './components/clientes/Clientes';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <main className={`background ${scrollY > 0 ? 'blur' : ''}`} id="mainContainer">

        <div className="container">
          <h1 className="title">
            <span className="span">Amplía </span>tus ventas con mis <span className="red">servicios</span><br />
            adaptados a tu negocio.
          </h1>
          <p className="subtitle">
            Gran cantidad de testimonios validan mi trabajo.
          </p>
          <div className="buttons">
            <button className="buttonTest">Mira informacion sobre quien soy aqui</button>
            <button className="buttonAbout">Ver testimonios</button>
          </div>
        </div>
      </main>
      <About />
      <Clientes/>
    </div>
  );
}

export default App;
