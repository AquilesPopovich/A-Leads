import React from 'react'
import style from './about.module.css'

const About = ({language}) => {
  return (
    <div>
      <div className={style.content}>
        <div className={`${style.cols} ${style.col0}`}>
          <h1 className={style.textH1}>
            {language === 'es' ? 'Acerca de' : 'About'}
          </h1>
          <p className={style.textP}>
            {language === 'es'
              ? 'Las empresas de hoy en día buscan constantemente nuevas maneras de atraer clientes. El Marketing, las Redes Sociales son la fuente primordial del desarrollo tecnológico-comercial del S XXI.'
              : 'Today\'s companies are constantly looking for new ways to attract customers. Marketing, Social Networks are the prime source of technological-commercial development of the 21st century.'}
          </p>
          <p className={style.textP}>
            {language === 'es'
              ? 'A+Leads se creó con el propósito de brindar una solución de Generación de Demanda para empresas digitales de todo el mundo. Nos valemos por crear relaciones de calidad con nuestros clientes y a través de nuestro trabajo logramos que las empresas creen así mismas relaciones redituables con su público objetivo.'
              : 'A+Leads was created with the purpose of providing a Demand Generation solution for digital companies worldwide. We pride ourselves on creating quality relationships with our clients, and through our work, we enable companies to build profitable relationships with their target audience.'}
          </p>
          <p className={style.textP}>
            {language === 'es'
              ? 'Originada en Buenos Aires, Argentina, la empresa cuenta con una amplia llegada a los continentes de Sudamérica, Norteamérica, Europa y Medio Oriente.'
              : 'Originated in Buenos Aires, Argentina, the company has a wide reach across the continents of South America, North America, Europe, and the Middle East.'}
          </p>
          <button className={style.btn}>
            {language === 'es' ? 'Contáctanos' : 'Contact Us'}
          </button>
        </div>
        <div className={`${style.cols} ${style.col1}`}></div>
      </div>
    </div>
  );
  
}

export default About