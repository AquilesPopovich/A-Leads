import React, { useEffect, useState } from 'react';
import { TiChartLineOutline } from 'react-icons/ti';
import style from './clientes.module.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clientes = () => {

  const [seleccionado, setSeleccionado] = useState(null); // Inicializa seleccionado como null

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const clientesInfo = [{
    name: "hola",
    tiempo: "7 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-1024x576.png",
    urlTestimonio: "" ,
    personaTestimonio: "Pepe(Ceo)"
      },{
    name: "bgp",
    tiempo: "2 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" ,
    personaTestimonio: "Armel(Ceo)"
      },{
    name: "mine",
    tiempo: "3 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://w7.pngwing.com/pngs/493/809/png-transparent-kik-messenger-messaging-apps-mobile-app-kin-app-store-iphone-electronics-text-logo.png",
    urlTestimonio: "" ,
    personaTestimonio: "Man(Ceo)"
      },{
    name: "rara",
    tiempo: "1 mes",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://i.pinimg.com/550x/82/b2/1f/82b21fe6d9166c673eed585a5fc38ef5.jpg",
    urlTestimonio: "" ,
    personaTestimonio: "Juan(Ceo)"
      },{
    name: "lla",
    tiempo: "6 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" ,
    personaTestimonio: "Richi(Ceo)"

      },{
        name: "d",
        tiempo: "9 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
        urlTestimonio: "" ,
        personaTestimonio: "Marta(Ceo)"
      }]

  return (
    <div className={style.container}>
      <div data-aos="fade-up" className={`${style.cols} ${style.col0}`}>
        {seleccionado ? (
          <>
          <div className={style.cardGrande}>
            <img src={seleccionado.imgEmpresa} alt="" />
            <h2>Empresa: {seleccionado.name}</h2>
            <p>Logros: {seleccionado.Resultado}</p>
            <p>Tiempo: {seleccionado.tiempo}</p>
            <button className={style.btnTestimonio}>Mira el testimonio de {seleccionado.personaTestimonio} </button>
            </div>
          </>
        ) : (
          <>
          <div className={style.cardGrande}>

            <img src={clientesInfo[0].imgEmpresa} alt="" />
            <h2>Empresa: {clientesInfo[0].name}</h2>
            <p>Logros: {clientesInfo[0].Resultado}</p>
            <p>Tiempo: {clientesInfo[0].tiempo}</p>
            <button className={style.btnTestimonio}>Mira el testimonio de {clientesInfo[0].personaTestimonio} </button>
          </div>

          </>
        )}
      </div>
      <div className={`${style.cols} ${style.col1}`}>
        <div className={style.casosDeExitos}>
        <h3>Casos de Exitos</h3>

        </div>
        <div className={style.cards}>
        {clientesInfo.map((cliente, index) => {
          return (
            <div data-aos="fade-up" key={index} className={style.card} onClick={() => setSeleccionado(cliente)}>
              <img src={cliente.imgEmpresa} alt={cliente.name} />
              <h3>{cliente.name}</h3>
            </div>
          )
        })}

        </div>
      </div>
    </div>
  )
}

export default Clientes;
