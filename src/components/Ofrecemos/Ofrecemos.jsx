import React, { useState } from 'react';
import style from './ofrecemos.module.css';

const Ofrecemos = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const info = [
    {
      img: "https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg",
      name: "LinkedIn Organic lead-Gen",
      detalle: "dasdasdas"
    },
    {
      img: "https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg",
      name: "LinkedIn Brand Development",
      detalle: "lsadasdasfas"
    },
    {
      img: "https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg",
      name: "Talent Acquisition",
      detalle: "rasdadssa"
    },
    {
      img: "https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg",
      name: "Talent Acquisition",
      detalle: "rasdadssa"
    },
    {
      img: "https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg",
      name: "Talent Acquisition",
      detalle: "rasdadssa"
    },
    {
      img: "https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg",
      name: "Trainings",
      detalle: "qasxaxsa"
    }
  ];

  return (
    <div className={style.container}>
      Soluciones
      <div className={style.cardContainers}>
        {info.map((servicio, index) => (
          <div
            className={style.card}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            key={index}
          >
            <img
              src={servicio.img}
              alt={servicio.name}
              className={focusedIndex === index ? style.cardImageFocused : style.cardImage}
            />
            <h3>{servicio.name}</h3>
            {focusedIndex === index && (
              <div className={style.btnDiv}>
                <button className={style.btn}>Saber más</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofrecemos;
