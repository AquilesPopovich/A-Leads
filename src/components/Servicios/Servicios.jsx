import React, { useEffect, useState } from 'react';
import style from './servicios.module.css';
import armelSeriviocs from '../../assets/armelServicios.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicios = ({ language }) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const ALeads = [{
    name: "Linkedin Data",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-01-1-in-Fineract-implementations-.png",
    info: "LinkedIn es una plataforma de alto potencial denominada 'Océano Azul'. Con más del 44% de usuarios facturando $75,000 anuales, y el 80% de los leads de B2B provenientes de LinkedIn, es una fuente invaluable para descubrir oportunidades de negocio.",
    infoI: "LinkedIn is a high-potential platform called 'Blue Ocean'. With over 44% of users billing $75,000 annually, and 80% of B2B leads coming from LinkedIn, it's an invaluable source for discovering business opportunities."
  }, {
    name: "For Tech Companies",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-02-We-re-Everywhere-Literally.png",
    info: "Para empresas de software y tech companies, están en el lugar correcto: LinkedIn ofrece un ecosistema exclusivo para potenciar la generación de demanda. Con un público altamente relevante y herramientas de segmentación.",
    infoI: "For software companies and tech companies, they are in the right place: LinkedIn offers an exclusive ecosystem to boost demand generation. With a highly relevant audience and segmentation tools."
  }, {
    name: "High-Standard Work",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-03-The-Power-of-Community-.png",
    info: "En A+Leads nos especializamos en brindar el mejor de los servicios y una excelencia de entrega para todos nuestros clientes. Nos guíamos por la calidad de trabajo y la posibilidad de co-crear relaciones profesionales sana.",
    infoI: "At A+Leads, we specialize in providing the best services and excellence in delivery for all our clients. We are guided by the quality of work and the possibility of co-creating healthy professional relationships."
  }];

  return (
    <div className={style.container}>
      <div className={style.contH2}>
        <h2 className={style.ALead}>
          {language === 'es' ? '¿Por qué A+Leads?' : 'Why A+Leads?'}
        </h2>
      </div>
      <div className={style.content}>
        {ALeads.map((lead) => (
          <div data-aos="fade-up" className={style.card} key={lead.name}>
            <div className={style.contImg}>
              <img src={lead.img} alt="" />
            </div>
            <div className={style.textArea}>
              <h3>{lead.name}</h3>
              <p>{language === 'es' ? lead.info : lead.infoI}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
