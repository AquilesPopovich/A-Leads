import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import style from './modal.module.css'

const Entrevistas = ({entrevistas, setEntrevistas}) => {

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

    if(!entrevistas) return null

  return (
    <div className={style.modalContent}>
      <div className={style.modal}>
        <div  className={style.btnCloseCont} >

        <button className={style.btnClose} onClick={()=>setEntrevistas(false)}>Close</button>
        </div>
        <div className={style.videoContainer}>
            <div className={style.btnsContainer}>
            <button className={style.btnNavegacion} onClick={() => goToIndex(0)}>Entrevista en Madrid</button>
            <button className={style.btnNavegacion} onClick={() => goToIndex(1)}>Entrevista en Narnia</button>
            <button className={style.btnNavegacion} onClick={() => goToIndex(2)}>Entrevista en Joseluis</button>

            </div>
            <div className={style.contenedorEntrevistas}>

            <button className={style.btnFlecha} onClick={goToPrev}><ArrowBackIosNewIcon/></button>
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
            <button className={style.btnFlecha} onClick={goToNext}><ArrowForwardIosIcon/></button>
            </div>

          </div>
      </div>
    </div>
  )
};

export default Entrevistas;