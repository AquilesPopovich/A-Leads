import React, { useState } from 'react';
import style from './clientes.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Clientes = () => {
    const [clienteIndex, setClienteIndex] = useState(0);
    
    const infoClientes = [
        {
            "clientes1": true,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s',
            "videoTestimonio": "videoasadsa",
            "empresa": 'Microsoft',
            "resultado": "Aumenté las ventas en un 60%",
            "posicion": "Satya Nadella, CEO de Microsoft"
        },
        {
            "clientes2": true,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9GofN6QfVnhS6HUqvl6QAaKYm9EHGtOXOR2mAZzJyg&s',
            "videoTestimonio": "videoasadsa",
            "empresa": 'Amazon',
            "resultado": "Aumenté las ventas en un 80%",
            "posicion": "Jeff Bezos, CEO de Amazon"
        },
        {
            "clientes1": true,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s',
            "videoTestimonio": "adsa",
            "empresa": 'thi',
            "resultado": "Aumenté las ventas en un 80%",
            "posicion": "Jeff Bezos, CEO de Amazon"
        },
        {
            "clientes2": true,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9GofN6QfVnhS6HUqvl6QAaKYm9EHGtOXOR2mAZzJyg&s',
            "videoTestimonio": "videoasadsa",
            "empresa": 'linkedin',
            "resultado": "Aumenté las ventas en un 80%",
            "posicion": "Jeff Bezos, CEO de Amazon"
        },
        {
            "clientes2": true,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9GofN6QfVnhS6HUqvl6QAaKYm9EHGtOXOR2mAZzJyg&s',
            "videoTestimonio": "videoasadsa",
            "empresa": 'linkedin',
            "resultado": "Aumenté las ventas en un 80%",
            "posicion": "Jeff Bezos, CEO de Amazon"
        },
        {
            "clientes2": true,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9GofN6QfVnhS6HUqvl6QAaKYm9EHGtOXOR2mAZzJyg&s',
            "videoTestimonio": "videoasadsa",
            "empresa": 'linkedin',
            "resultado": "Aumenté las ventas en un 80%",
            "posicion": "Jeff Bezos, CEO de Amazon"
        }
    ];

    const handleNextCliente = () => {
        setClienteIndex((prevIndex) => (prevIndex === infoClientes.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevCliente = () => {
        setClienteIndex((prevIndex) => (prevIndex === 0 ? infoClientes.length - 1 : prevIndex - 1));
    };

    const centralIndex = clienteIndex % infoClientes.length;
    const prevIndex = (centralIndex - 1 + infoClientes.length) % infoClientes.length;
    const nextIndex = (centralIndex + 1) % infoClientes.length;

    return (
        <div className={style.containerClientes}>
                <button onClick={handlePrevCliente}><ArrowBackIosNewIcon/></button>
                
            <div className={style.contenedor}>
                <div className={`${style.cliente}`}>
                    <div className={style.clienteNoActive}>

                    <div className={`${style.cols} ${style.col0}`}>
                        <img src={infoClientes[prevIndex].img} alt="" />
                    </div>
                    <div className={`${style.cols} ${style.col1}`}>
                        <h2 className={style.hola}>Experiencia con {infoClientes[prevIndex].empresa}</h2>
                        <p className={style.hola}><b className={style.hola}>Resultados:</b> {infoClientes[prevIndex].resultado}</p>
                        <button>Mira el testimonio de {infoClientes[prevIndex].posicion} aquí</button>
                    </div>
                    </div>

                </div>
                <div className={`${style.cliente} ${style.clienteActive}`}>
                
                    <div className={`${style.cols} ${style.col0}`}>
                        <img src={infoClientes[centralIndex].img} alt="" />
                    </div>
                    <div className={`${style.cols} ${style.col1}`}>

                        <h2 className={style.hola}>Experiencia con {infoClientes[centralIndex].empresa}</h2>
                        <p className={style.hola}><b className={style.hola}>Resultados:</b> {infoClientes[centralIndex].resultado}</p>
                        <button>Mira el testimonio de {infoClientes[centralIndex].posicion} aquí</button>

                    </div>
                </div>
                <div className={`${style.cliente}`}>
                
                <div className={style.clienteNoActive}>
                
                    <div className={`${style.cols} ${style.col0}`}>
                        <img src={infoClientes[nextIndex].img} alt="" />
                    </div>
                    <div className={`${style.cols} ${style.col1}`}>
                        <h2 className={style.hola}>Experiencia con {infoClientes[nextIndex].empresa}</h2>
                        <p className={style.hola}><b className={style.hola}>Resultados:</b> {infoClientes[nextIndex].resultado}</p>
                        <button>Mira el testimonio de {infoClientes[nextIndex].posicion} aquí</button>
                    </div>
                    </div>
                </div>

            </div>
                <button className={style.siguiente} onClick={handleNextCliente}><ArrowForwardIosIcon/></button>
           
        </div>
    );
};

export default Clientes;
