import React from 'react'
import style from './inspired.module.css'

const Inspired = ({language}) => {

  const inspiraciones = [{
    name: "Blog",
    img: "https://fiter.io/wp-content/uploads/Why-Fiter-01-1-in-Fineract-implementations-.png",
    link: "https://hotmart.com/es/club/curso-de-setter-y-ventas-en-linkedin"
}, {
  name: "Videos",
  img: "https://fiter.io/wp-content/uploads/Why-Fiter-02-We-re-Everywhere-Literally.png",
  link: "https://www.youtube.com/watch?si=0cgZlBvmw5cs8CHn&v=AlTYKmhGaik&feature=youtu.be "
}, {
  name: "Community",
  img: "https://fiter.io/wp-content/uploads/Why-Fiter-03-The-Power-of-Community-.png",
  link: "https://www.youtube.com/live/puQJ9skmXYc?si=BK_386_sUhhSbOgh"
}]

return (
  <div className={style.container}>
    <div className={style.contH2}>
      <h2 className={style.ALead}>
        {language === 'es' ? 'Inspiraciones de A+Leads' : 'A+Leads Inspirations'}
      </h2>
    </div>
    <div className={style.content}>
      {inspiraciones.map((inspiracion) => (
        <div data-aos="fade-up" className={style.card} key={inspiracion.id}>
          <div className={style.contImg}>
            <img src={inspiracion.img} alt="" />
          </div>
          <div className={style.textArea}>
            <h3>{inspiracion.name}</h3>
            <div className={style.contButton}>
              <button>
                <a href={inspiracion.link}>

                {language === 'es' ? 'Saber más' : 'Learn More'}
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Inspired