import React, { useEffect, useState } from 'react';
import style from './clientes.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clientes = ({ language }) => {
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  const clientesInfo = [
    {
      name: "BGP GLOBAL",
      Resultado: "BGP Global es una empresa productora de bombas hidráulicas provenientes de Alemania. La empresa estaba en búsqueda de generar nuevos distribuidores de su producto en México. LinkedIn fue la solución adecuada para encontrar los perfiles apuntados. A pesar de ser un nicho demasiado ‘particular’, se han logrado grandes resultados (3 solicitudes de compra por arriba de los $40mil USD en los últimos 2 meses; 5-7 contactos distribuidores interesados).",
      ResultadoI: "BGP Global is a hydraulic pump manufacturing company from Germany. The company was looking to generate new distributors for its product in Mexico. LinkedIn was the right solution to find targeted profiles. Despite being a very 'particular' niche, great results have been achieved (3 purchase requests above $40k USD in the last 2 months; 5-7 interested distributor contacts).",
      imgEmpresa: "https://static.wixstatic.com/media/b9e612_4e764280e5244a9ebd1c2564c9558411~mv2.png/v1/fill/w_260,h_150,al_c,lg_1,q_85,enc_auto/logo.png",
      personaTestimonio: "Pepe(Ceo)",
      linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
    },
    {
      name: "CRACKS INMOBILIARIOS",
      Resultado: "Cracks Inmobiliarios es una Agencia de Marketing digital enfocada en ofrecer servicios de gestión de Redes Sociales para agentes inmobiliarios de México y USA. Cuenta con una fuerte imagen de marca, proveniente de la visibilidad de su fundadora, Vanesa Monroe. Su trabajo se veía bien desarrollado en Instagram, pero notaron que podrían llegar a prospectos de mayor calidad a través de la red de LinkedIn. Se obtuvo un fuerte desarrollo de imagen de marca a través de LinkedIn así como un número de 20 nuevas agendas por mes provenientes de la red.",
      ResultadoI: "Cracks Inmobiliarios is a digital marketing agency focused on providing social media management services for real estate agents in Mexico and the USA. It has a strong brand image stemming from the visibility of its founder, Vanesa Monroe. Their work was well-developed on Instagram, but they noticed they could reach higher quality prospects through LinkedIn. The process worked in the same way as previous projects: 1. Creation of a quality profile 2. Creation of a page 3. Script and use of KPIs + SOPs for conversations *Complementary: content posting on the platform*",
      imgEmpresa: "https://media.licdn.com/dms/image/C4D0BAQFgk83k-RZmVw/company-logo_200_200/0/1678496266182?e=2147483647&v=beta&t=i4NbTbNx-fD9LQAo6qcX82dbY5QCQla7Y_yOERsQ-ss",
      personaTestimonio: "Armel(Ceo)",
      linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
    },
    {
      name: "ClarityProfits",
      Resultado: "ClarityProfits es una empresa de Consultoría y Asesoría Financiera. Sus trabajos se veían diversificados en Generación de Leads a través de Instagram y Facebook, pero durante casi 10 meses en el 2023 (Febrero a Diciembre) no habían podido cumplir los objetivos pactados. Fue así como la sugerencia de utilizar LinkedIn como fuente de Generación de Leads acrecentó mucho más el número de llamadas y volumen comercial. La empresa obtuvo un fuerte desarrollo de imagen de marca en LinkedIn, creando relaciones profesionales con prospectos propios del segmento de Mercado. Se lograron 15 agendas en el primer mes de trabajo y más de 1000 nuevos contactos orgánicos agregados al Funnel de Conversión.",
      ResultadoI: "ClarityProfits is a Financial Consulting and Advisory firm. Their work was diversified in Lead Generation through Instagram and Facebook, but for almost 10 months in 2023 (February to December) they had not been able to meet their set goals. Thus, the suggestion to use LinkedIn as a Lead Generation source greatly increased the number of calls and commercial volume. The process worked as follows: - First, the audience to which the value proposition would be communicated was defined. - Then, the profiles from which the communication with new contacts would take place were prepared. - A LinkedIn page specialized in showcasing the company's value proposition was also prepared. - A conversation model (script or 'framework') was defined through which the conversations would take place. - Objectives were defined: 1) New contacts added daily / 2) Acceptance rate / 3) Conversations started / 4) Conversation follow-ups / 5) Number of Calendlys sent / 6) Number of calls scheduled",
      imgEmpresa: "https://media.licdn.com/dms/image/D4E03AQEByamuIbNy_Q/profile-displayphoto-shrink_800_800/0/1691888946884?e=2147483647&v=beta&t=601umF8vh6kZUdhZXCJdpRWcCF32OIJHdhJ2NwokDUU",
      personaTestimonio: "Man(Ceo)",
      linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
    },
    {
      name: "Nómadas capacitacion ",
      Resultado: "Nómadas es una agencia de capacitación de México que lleva a cargo un negocio de Consultoría y Coaching profesional en ventas para empresas de todo tipo. Claudia, su fundadora, trabajaba de manera consistente en LinkedIn, obteniendo la mayor parte de sus contactos de esta red, pero no daba abasto con el tiempo que esta actividad requería. Fue así como asignamos un perfil comercial para cubrir esta área. Logramos automatizar el proceso de prospección de manera orgánica obteniendo una media de 20 reuniones mensuales para el negocio.",
      ResultadoI: "Nómadas is a training agency from Mexico that runs a Consulting and Professional Sales Coaching business for companies of all kinds. Claudia, its founder, consistently worked on LinkedIn, obtaining most of her contacts from this network, but could not keep up with the time this activity required. So, we assigned a commercial profile to cover this area. The processes were exactly the same: 1. Search for an appropriate profile to carry out the communication of the brand's value proposition. 2. Training of the same. 3. Processes and Conversation Scripts. 4. KPIs and their registration",
      imgEmpresa: "https://media.licdn.com/dms/image/C560BAQHfk57Tr1_xSQ/company-logo_200_200/0/1674907259346/nomadascapacitacion_logo?e=1725494400&v=beta&t=KO_aYZZHhboVyCHjYeeF0yiSjKK1FduezJV5ep1hovw",
      personaTestimonio: "Juan(Ceo)",
      linkVideo: 'https://www.youtube.com/channel/UCU2WBx5sxxTO-YdRSoSQEFw',
    }
  ];
  

  return (
    <div className={style.container}>
      <div data-aos="fade-up" className={`${style.cols} ${style.col0}`}>
        {seleccionado ? (
          <>
            <div className={style.cardGrande}>
              <img className={style.imgCardGran} src={seleccionado.imgEmpresa} alt="" />
              <h2>{seleccionado.name}</h2>
              <p> {seleccionado.Resultado}</p>
            </div>
          </>
        ) : (
          <>
            <div className={style.cardGrande}>
              <img className={style.imgCardGran} src={clientesInfo[0].imgEmpresa} alt="" />
              <h2>{clientesInfo[0].name}</h2>
              <p> {clientesInfo[0].Resultado}</p>
             
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
        <div className={style.test}>
        <button className={style.btnTestimonio}> <a className={style.allTest} href='https://youtube.com/playlist?list=PLHmHWTcNj6DhkM6sqEuwzasl0xMz1th0L&si=tQ9N7LMMO67NhdHK' rel="noreferrer" target="_blank">

{language === 'es' ? 'Mira todos nuestros testimonios' : 'Watch all testimonial'}
</a>
</button>
        </div>
      </div>
     
    </div>
  );
}

export default Clientes;
