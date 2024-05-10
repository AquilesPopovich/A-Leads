import React, { useState } from 'react';
import { TiChartLineOutline } from 'react-icons/ti';
import style from './clientes.module.css'; 

const Clientes = () => {

  const [seleccionado, setSeleccionado] = useState(null); // Inicializa seleccionado como null

  const clientesInfo = [{
    name: "hola",
    tiempo: "7 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" 
      },{
    name: "bgp",
    tiempo: "2 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" 
      },{
    name: "mine",
    tiempo: "3 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" 
      },{
    name: "rara",
    tiempo: "1 mes",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" 
      },{
    name: "lla",
    tiempo: "6 meses",
    Resultado: "Aumente las ventas en un 90%",
    imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
    urlTestimonio: "" 
      },{
        name: "d",
        tiempo: "9 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
        urlTestimonio: "" 
      }]

  return (
    <div className={style.container}>
      <div className={`${style.cols} ${style.col0}`}>
        {seleccionado ? (
          <>
          <div>
            <img src={seleccionado.imgEmpresa} alt="" />
            <h2>{seleccionado.name}</h2>
            <p>{seleccionado.tiempo}</p>
            <p>{seleccionado.Resultado}</p>
            <button>Ver testimonio</button>
            </div>
          </>
        ) : (
          <>
          <div>

            <img src={clientesInfo[0].imgEmpresa} alt="" />
            <h2>{clientesInfo[0].name}</h2>
            <p>{clientesInfo[0].tiempo}</p>
            <p>{clientesInfo[0].Resultado}</p>
            <button>Ver testimonio</button>
          </div>

          </>
        )}
      </div>
      <div className={`${style.cols} ${style.col1}`}>
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
  )
}

export default Clientes;
