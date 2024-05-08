import React, { useState } from 'react'
import style from './servicios.module.css'
import armelSeriviocs from '../../assets/armelServicios.jpeg'


const Servicios = () => {

  const [infoServi, setInfoServi] = useState(false)

  const servicios = [{
      name: "aumentar ventas",
      info: "esto se logra en base a mi experiencia porque soy un crack"
  }, {
    name: "aumentar ventas",
    info: "esto se logra en base a mi experiencia porque soy un crack"
  }, {
    name: "aumentar ventas",
    info: "esto se logra en base a mi experiencia porque soy un crack"
  }]

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
        {servicios.map((servicio) =>(
          <div>
          <span className={style.tilde}>✓</span>
          <div onClick={()=>setInfoServi(true)} className={style.check} > {servicio.name}</div>
          {infoServi ? <p>{servicio.info}</p> : null}
          </div>
        ))}
      
      </div>
     
      </div>
      </div>
     
      
    </div>
  )
}

export default Servicios