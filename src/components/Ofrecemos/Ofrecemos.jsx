import React, { useEffect, useState } from 'react';
import style from './ofrecemos.module.css';
import Modal from '../modal/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ofrecemos = ({language}) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null)
  const [saberMas, setSaberMas] = useState(false)

  const info = [
    {
      img: "https://fiter.io/wp-content/uploads/F-iconservice_Iconos-Services-3.svg",
      name: "LinkedIn Organic lead-Gen",
      detalle: "La generación de demanda en LinkedIn para empresas B2B es el punto de partida para aquellas compañías que deseen extender su propuesta de valor a una comunidad profesional remarcada por su calidad de contactos. La propuesta de A+Leads es la de crear una estrategia de Prospección minuciosa y 100% orgánica en conjunción con cada empresa. La personalización, la atención y la calidad en cada uno de los contactos es lo que marca la diferencia. No nos olvidemos de la paciencia. A través de nuestra estrategia, tu empresa llegará a nuevos prospectos sólamente con el fin de acercar vuetra propuesta de valor de una manera interactiva y atractiva para el cliente. Valoramos trabajar con empresas que cuenten con una propuesta de valor legítima y útil para el Mercado.",
      detalleI: "LinkedIn demand generation for B2B companies is the starting point for those companies that wish to extend their value proposition to a professional community remarked by its quality of contacts. A+Leads' proposal is to create a thorough and 100% organic prospecting strategy in conjunction with each company. Personalization, attention and quality in each of the contacts is what makes the difference. Let's not forget patience. Through our strategy, your company will reach new prospects only in order to approach your value proposition in an interactive and attractive way for the client. We value working with companies that have a legitimate and useful value proposition for the market."

    },
    {
      img: "https://fiter.io/wp-content/uploads/F-iconservice_Iconos-Services-2.svg",
      name: "LinkedIn Brand Development",
      detalle: "El desarrollo de Marca es una pieza fundamental e indispensable para toda empresa con una Propuesta de Valor definida. Aún más para aquelles que co-habiten en el mundo digital. Aún más para aquellas que busquen transmitir su Propuesta en un Segmento profesional, serio y atractivo… Linkedin ofrece este contexto favorable. Nostros nos encargaremos de crear la mejor Estrategia de Marca para tu Empresa.",
      detalleI: " Brand development is a fundamental and indispensable piece for any company with a defined Value Proposition. Even more so for those who co-inhabit the digital world. Even more so for those who seek to transmit their proposal in a professional, serious and attractive segment... Linkedin offers this favorable context. We will take care of creating the best Brand Strategy for your Company."
    },
    {
      img: "https://fiter.io/wp-content/uploads/F-iconservice_Iconos-Services-1.svg",
      name: "Talent Acquisition",
      detalle: "Nos enfocamos en encontrar la persona correcta para tu negocio: Alguien que comparta los Valores de la empresa y se sienta identificado con la Misión y Visión. Alguien que se comprometa a una relación a largo plazo. Alguien que sea responsable, que cumpla con buenos Rendimientos y con Potencial de Crecimiento.",
      detalleI: "We focus on finding the right person for your business: Someone who shares the company's Values and identifies with the Mission and Vision. Someone who is committed to a long-term relationship. Someone who is responsible, who delivers good performance and has the potential for growth."

    },
    {
      img: "https://fiter.io/wp-content/uploads/F-iconservice_Iconos-Services-4.svg",
      name: "Trainings",
      detalle: "Ofrecemos todo tipo de entrenamientos. Nos valemos por el Coaching como herramienta fundamental, aplicada a cada una de las ramas del negocio. ",
      detalleI: "We offer all types of training. We use Coaching as a fundamental tool, applied to each of the branches of the business. "
    }
  ];

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.Soluciones}>
        {language === 'es' ? 'Soluciones' : 'Solutions'}
      </h2>
      <div className={style.cardContainers}>
        <div className={style.row}>
          <div 
            className={style.card}
            onMouseEnter={() => setFocusedIndex(0)}
            onMouseLeave={() => setFocusedIndex(null)}
            key={0}
          >
            <img
              src={info[0].img}
              alt={info[0].name}
              className={focusedIndex === 0 ? style.cardImageFocused : style.cardImage}
            />
            <h3>{info[0].name}</h3>
            {focusedIndex === 0 && (
              <div className={style.btnDiv}>
                <button onClick={() => {
                  setSaberMas(true);
                  setSelectedInfo(info[0]);
                }} className={style.btn}>
                  {language === 'es' ? 'Saber más' : 'Learn More'}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={style.row}>
          {info.slice(1).map((servicio, index) => (
            <div 
              className={style.card}
              onMouseEnter={() => setFocusedIndex(index + 1)}
              onMouseLeave={() => setFocusedIndex(null)}
              key={index + 1}
            >
              <img
                src={servicio.img}
                alt={servicio.name}
                className={focusedIndex === index + 1 ? style.cardImageFocused : style.cardImage}
              />
              <h3>{servicio.name}</h3>
              {focusedIndex === index + 1 && (
                <div className={style.btnDiv}>
                  <button onClick={() => {
                    setSaberMas(true);
                    setSelectedInfo(servicio);
                  }} className={style.btn}>
                    {language === 'es' ? 'Saber más' : 'Learn More'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Modal saberMas={saberMas} language={language} selectedInfo={selectedInfo} setSaberMas={setSaberMas} />
    </div>
  );
  
};

export default Ofrecemos;
