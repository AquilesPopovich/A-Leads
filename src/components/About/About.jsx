import React from 'react'
import style from './about.module.css'

const About = () => {
  return (
    <div>
        <div className={style.content}>
            <div className={`${style.cols} ${style.col0}`}>
                <h1 className={style.textH1} >About</h1>
                <p className={style.textP} >Las empresas de hoy en día buscan constanemtne nuevas maneras de atraer clientes. El Marketing, las Redes Sociales son la fuente primordial del desarrollo tecnológico-comercial del S XXI. </p> 
                <p className={style.textP} >
A+Leads se creó con el propósito de brindar una solución de Generacion de Demanda para empresas digitales de todo el mundo. Nos valemos por crear relaciones de calidad con nuestros clientes y a través de nuestro trabajo logramos que las empresas creen así mismo relaciones redituables con su público objetivo. </p> 
<p className={style.textP} >

Originada en Buenos Aires, Argentina, la empresa cuenta con una amplia llegada a los continentes de Sudamérica, Norteamérica, Europa y Medio Oriente. 
</p>
                <button className={style.btn}>Contactanos</button>
            </div>
            <div className={`${style.cols} ${style.col1}`}></div>
        </div>
    </div>
  )
}

export default About