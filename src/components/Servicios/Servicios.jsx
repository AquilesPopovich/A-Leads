import React from 'react'
import style from './servicios.module.css'
import armelSeriviocs from '../../assets/armelServicios.jpeg'


const Servicios = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
      <div className={`${style.cols} ${style.col0}`}>
        <div className={style.imgbox}>
        <img className={style.imgArmu} src={armelSeriviocs} alt="armelPng" />

        </div>
      </div>
      <div className={`${style.cols} ${style.col1}`}>        
      <div className={style.contTildes}>
      <span className={style.tilde}>✓</span>
        <div className={style.check} >  Aumentar ventas</div>
      </div>
      <div className={style.contTildes}>
      <span className={style.tilde}>✓</span>
        <div className={style.check} >  Aumentar ventas</div>
      </div>
      <div className={style.contTildes}>
    <span className={style.tilde}>✓</span>
        <div className={style.check} >  Aumentar ventas</div>
      </div>
      <div className={style.contTildes}>
    <span className={style.tilde}>✓</span>
        <div className={style.check} >  Aumentar ventas</div>
      </div>
      <div className={style.contTildes}>
    <span className={style.tilde}>✓</span>
        <div className={style.check} >  Aumentar ventas</div>
      </div>
      </div>
      </div>
     
      
    </div>
  )
}

export default Servicios