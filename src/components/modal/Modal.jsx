import React from 'react';
import style from './modal.module.css';

const Modal = ({ saberMas, setSaberMas, selectedInfo }) => {
  if (!saberMas) return null;

  return (
    <div className={style.modalBackdrop} onClick={() => setSaberMas(false)}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.contentBtn}>

        <button className={style.closeButton} onClick={() => setSaberMas(false)}>x</button>
        </div>
        <img src={selectedInfo.img} alt="" />
        <h2>{selectedInfo.name}</h2>
        <p>{selectedInfo.detalle}</p>
      </div>
    </div>
  );
};

export default Modal;
