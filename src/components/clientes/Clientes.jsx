import React, { useEffect, useState } from 'react';
import { TiChartLineOutline } from 'react-icons/ti';
import style from './clientes.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clientes = ({ language }) => {
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  const clientesInfo = [{
    name: "hola",
    tiempo: "7 meses",
    tiempoI: "7 months",
    Resultado: "Aumente las ventas en un 90%",
    ResultadoI: "Increased sales by 90%",
    imgEmpresa: "https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-1024x576.png",
    personaTestimonio: "Pepe(Ceo)",
    linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
  }, {
    name: "bgp",
    tiempo: "2 meses",
    tiempoI: "2 months",
    Resultado: "Aumente las ventas en un 90%",
    ResultadoI: "Increased sales by 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    personaTestimonio: "Armel(Ceo)",
    linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
  }, {
    name: "mine",
    tiempo: "3 meses",
    tiempoI: "3 months",
    Resultado: "Aumente las ventas en un 90%",
    ResultadoI: "Increased sales by 90%",
    imgEmpresa: "https://w7.pngwing.com/pngs/493/809/png-transparent-kik-messenger-messaging-apps-mobile-app-kin-app-store-iphone-electronics-text-logo.png",
    personaTestimonio: "Man(Ceo)",
    linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
  }, {
    name: "rara",
    tiempo: "1 mes",
    tiempoI: "1 month",
    Resultado: "Aumente las ventas en un 90%",
    ResultadoI: "Increased sales by 90%",
    imgEmpresa: "https://i.pinimg.com/550x/82/b2/1f/82b21fe6d9166c673eed585a5fc38ef5.jpg",
    personaTestimonio: "Juan(Ceo)",
    linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
  }, {
    name: "lla",
    tiempo: "6 meses",
    tiempoI: "6 months",
    Resultado: "Aumente las ventas en un 90%",
    ResultadoI: "Increased sales by 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    personaTestimonio: "Richi(Ceo)",
    linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
  }, {
    name: "d",
    tiempo: "9 meses",
    tiempoI: "9 months",
    Resultado: "Aumente las ventas en un 9",
    ResultadoI: "Increased sales by 9",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    personaTestimonio: "Marta(Ceo)",
    linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
  }];

  return (
    <div className={style.container}>
      <div data-aos="fade-up" className={`${style.cols} ${style.col0}`}>
        {seleccionado ? (
          <>
            <div className={style.cardGrande}>
              <img className={style.imgCardGran} src={seleccionado.imgEmpresa} alt="" />
              <h2>{language === 'es' ? 'Empresa:' : 'Company:'} {seleccionado.name}</h2>
              <p>{language === 'es' ? 'Logros:' : 'Achievements:'} {seleccionado.Resultado}</p>
              <p>{language === 'es' ? 'Tiempo:' : 'Time:'} {seleccionado.tiempo}</p>
              <button className={style.btnTestimonio}> <a href={seleccionado.linkVideo}  target="_blank">

                {language === 'es' ? 'Mira el testimonio de' : 'Watch testimonial from'} {seleccionado.personaTestimonio}
              </a>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={style.cardGrande}>
              <img className={style.imgCardGran} src={clientesInfo[0].imgEmpresa} alt="" />
              <h2>{language === 'es' ? 'Empresa:' : 'Company:'} {clientesInfo[0].name}</h2>
              <p>{language === 'es' ? 'Logros:' : 'Achievements:'} {clientesInfo[0].Resultado}</p>
              <p>{language === 'es' ? 'Tiempo:' : 'Time:'} {clientesInfo[0].tiempo}</p>
              <button className={style.btnTestimonio}> <a href={clientesInfo[0].linkVideo}  target="_blank">

                {language === 'es' ? 'Mira el testimonio de' : 'Watch testimonial from'} {clientesInfo[0].personaTestimonio}
              </a>
              </button>
            </div>
          </>
        )}
      </div>
      <div className={`${style.cols} ${style.col1}`}>
        <div className={style.casosDeExitos}>
          <h3>{language === 'es' ? 'Casos de Éxito' : 'Success Stories'}</h3>
        </div>
        <div className={style.cards}>
          {clientesInfo.map((cliente, index) => {
            return (
              <div key={index} className={style.card} onClick={() => setSeleccionado(cliente)}>
                <img src={cliente.imgEmpresa} alt={cliente.name} />
                <h3>{cliente.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Clientes;
