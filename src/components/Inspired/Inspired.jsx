import React from 'react'
import style from './inspired.module.css'

const Inspired = () => {

  const inspiraciones = [{
    name: "Linkedin Data",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-01-1-in-Fineract-implementations-.png",
    info: "LinkedIn es una plataforma de alto potencial denominada 'Océano Azul' en referencia a su vasta reserva de figuras profesionales."
}, {
  name: "For Tech Companies",
  img: "https://fiter.io/wp-content/uploads/Why-Fiter-02-We-re-Everywhere-Literally.png",
  info: "Para empresas de software y tech companies, están en el lugar correcto: LinkedIn ofrece un ecosistema exclusivo para potenciar."
}, {
  name: "High-Standard Work",
  img: "https://fiter.io/wp-content/uploads/Why-Fiter-03-The-Power-of-Community-.png",
  info: "En A+Leads nos especializamos en brindar el mejor de los servicios y una excelencia de entrega para todos nuestros clientes. Nos ."
}]

return (
  <div className={style.container}>
    <div className={style.contH2}>

    <h2 className={style.ALead}>Inspiraciones de A+Leads</h2>
    </div>
    <div className={style.content}>
    {inspiraciones.map((lead) =>(
    <div data-aos="fade-up"  className={style.card}>
      <div className={style.contImg}>

      <img src={lead.img} alt="" />
      </div>
      <div className={style.textArea}>
      <h3>{lead.name}</h3>
      <p>{lead.info}</p>
      <div className={style.contButton}>
      <button>Saber mas</button>

      </div>
      </div>
    </div>

    ))}

    </div>
   
    
  </div>
)
}

export default Inspired