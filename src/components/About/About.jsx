import React, { useState } from 'react';
import style from './about.module.css';
import imgAbout from '../../assets/imgAbout.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <section className={style.about}>
        <div className={style.container}>
          <div className={style.containerAb}>
            <div className={style.imageContainer}>
              <img className={style.image} src={imgAbout} alt="Imagen Armel" />
            </div>
            <div className={style.textContainer}>
              <h1>Soy Armel de Amorrortu</h1>
              <p>
                <span className={style.textSpan}>+3 años de experiencia</span> en el mundo del  <span className={style.textSpan2}>coaching</span> y las <span className={style.textSpan2}>empresas online</span>, mi objetivo principal es ayudarte a <span className={style.textSpan}>escalar</span> tu negocio hasta las <span className={style.textSpan}>5</span>,  <span className={style.textSpan}>6</span> o  <span className={style.textSpan}>7 </span>cifras, <span className={style.textSpan2}>independientemente de tu situación actual</span>. El camino no es fácil, pero estoy aquí para apoyarte en cada paso del camino.
              </p>
            </div>
          </div>
          <h3>¿Quieres saber más sobre lo que hago? Mira mis diferentes entrevistas</h3>
          <div className={style.videoContainer}>
            <div className={style.btnsContainer}>
            <button className={style.btnFlecha} onClick={goToPrev}><ArrowBackIosNewIcon/></button>
            <button className={style.btnNavegacion} onClick={() => goToIndex(0)}>Entrevista en Madrid</button>
            <button className={style.btnNavegacion} onClick={() => goToIndex(1)}>Entrevista en Narnia</button>
            <button className={style.btnNavegacion} onClick={() => goToIndex(2)}>Entrevista en Joseluis</button>
            <button className={style.btnFlecha} onClick={goToNext}><ArrowForwardIosIcon/></button>

            </div>
            {/* Contenido de los divs de los videos */}
            <div style={{ display: currentIndex === 0 ? 'block' : 'none' }}>
              <p>Entrevista en Madrid</p>
              <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NbnSynwqplU"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ display: currentIndex === 1 ? 'block' : 'none' }}>
              <p>Entrevista en Narnia</p>
              <iframe
                className={style.video}
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=0gLODoXanog"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ display: currentIndex === 2 ? 'block' : 'none' }}>
              <p>Entrevista en Joseluis</p>
              <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=0gLODoXanog"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
