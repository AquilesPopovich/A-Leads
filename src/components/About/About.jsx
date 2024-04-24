import React, { useState } from 'react';
import style from './about.module.css';
import imgAbout from '../../assets/imgAbout.jpg';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
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
              <h2>Soy Armel de Amorrortu</h2>
              <p>
              +3 años de experiencia en el mundo del coaching y las empresas online, mi objetivo principal es ayudarte a escalar tu negocio hasta las 5, 6 o 7 cifras, independientemente de tu situación actual. El camino no es fácil, pero estoy aquí para apoyarte en cada paso del camino.
              </p>
            </div>
          </div>
            
          <h3>¿Quieres saber más sobre lo que hago? Mira mis diferentes entrevistas</h3>
          <div className={style.videoContainer}>
            <button className={style.btnFlecha} onClick={goToPrev}>izq</button>
            {/* Contenido de los divs de los videos */}
            <div style={{ display: currentIndex === 0 ? 'block' : 'none' }}>
              <p>entrevista en madrid</p>
              <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=NbnSynwqplU"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ display: currentIndex === 1 ? 'block' : 'none' }}>
              <p>entrevista en narnia</p>
              <iframe
                className={style.video}
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=lrCHDJ_gp-w"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ display: currentIndex === 2 ? 'block' : 'none' }}>
              <p>entrevista en joseluis</p>
              <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TU_ID_DE_VIDEO3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <button className={style.btnFlecha} onClick={goToNext}>derecha</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
