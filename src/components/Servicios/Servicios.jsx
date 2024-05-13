import React, { useEffect, useState } from 'react'
import style from './servicios.module.css'
import armelSeriviocs from '../../assets/armelServicios.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Servicios = () => {

  useEffect(() => {
    AOS.init({
    });
  }, []);


  const ALeads = [{
      name: "Linkedin Data",
      img: "https://fiter.io/wp-content/uploads/Why-Fiter-01-1-in-Fineract-implementations-.png",
      info: "LinkedIn es una plataforma de alto potencial denominada 'Océano Azul' en referencia a su vasta reserva de figuras profesionales y empresas. Con más del 44% de usuarios facturando $75,000 anuales, y el 80% de los leads de B2B provenientes de LinkedIn, es una fuente invaluable para descubrir oportunidades de negocio."
  }, {
    name: "For Tech Companies",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-02-We-re-Everywhere-Literally.png",
    info: "Para empresas de software y tech companies, están en el lugar correcto: LinkedIn ofrece un ecosistema exclusivo para potenciar la generación de demanda. Con un público altamente relevante y herramientas de segmentación."
  }, {
    name: "High-Standard Work",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-03-The-Power-of-Community-.png",
    info: "En A+Leads nos especializamos en brindar el mejor de los servicios y una excelencia de entrega para todos nuestros clientes. Nos guíamos por la calidad de trabajo y la posibilidad de co-crear relaciones profesionales sana."
  }]

  return (
    <div className={style.container}>
      <div className={style.contH2}>

      <h2 className={style.ALead}>Por que A+Leads?</h2>
      </div>
      <div className={style.content}>
      {ALeads.map((lead) =>(
      <div data-aos="fade-up"  className={style.card}>
        <div className={style.contImg}>

        <img src={lead.img} alt="" />
        </div>
        <div className={style.textArea}>
        <h3>{lead.name}</h3>
        <p>{lead.info}</p>

        </div>
      </div>

      ))}

      </div>
     
      
    </div>
  )
}

export default Servicios