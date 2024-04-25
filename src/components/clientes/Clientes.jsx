import React, { useState } from 'react'
import './clientes.module.css'

const Clientes = () => {
    const clientes = [
        {
            nombre: "Clau",
            imagen: "imagen_de_clau.jpg",
            testimonio: "https://us06web.zoom.us/rec/share/aZevGIyZaJIMe44DZnWXD7RMBapBw8YT5RCgrNMvUdh6ICjryzhJvu8NqilXyjI.TTMcQ_4O4dreInAd"
        },
        {
            nombre: "Cubel",
            imagen: "imagen_de_cubel.jpg",
            testimonio: "https://us06web.zoom.us/rec/share/AIEEX_YxnKlHSpajXamcWZGCjvmaYR_qCW2NVbRxpAZyoZw-9Xf4qZK-SZ0er1DO.eGRWay_3MW_8MuN-"
        },
        // Añade más clientes aquí
    ];

    const [currentCliente, setCurrentCliente] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    const handleTestimonioClick = (video) => {
        setShowVideo(true);
        // Puedes hacer algo con el enlace de video aquí, como abrirlo en una ventana modal
        console.log("Mostrar vídeo:", video);
    };

    const handleNextCliente = () => {
        setCurrentCliente((prevCliente) => (prevCliente + 1) % clientes.length);
    };

    const handlePrevCliente = () => {
        setCurrentCliente((prevCliente) => (prevCliente - 1 + clientes.length) % clientes.length);
    };

    return (
        <div>
            <div className="carousel">
                {clientes.map((cliente, index) => (
                    <div key={index} className={index === currentCliente ? "cliente active" : "cliente"}>
                        <h2>{cliente.nombre}</h2>
                        <img src={cliente.imagen} alt={`Imagen de ${cliente.nombre}`} />
                        <button className="btn testimonio" onClick={() => handleTestimonioClick(cliente.testimonio)}>Ver testimonio</button>
                    </div>
                ))}
            </div>

            {showVideo && (
                <div className="video-container">
                    {/* Aquí podría ir un componente de reproductor de video */}
                    <p>El vídeo se mostraría aquí</p>
                </div>
            )}

            <div>
                <button className="btn prev" onClick={handlePrevCliente}>Anterior</button>
                <button className="btn next" onClick={handleNextCliente}>Siguiente</button>
            </div>
        </div>
    );
}

export default Clientes