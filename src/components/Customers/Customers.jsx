import React, { useState } from 'react';
import style from './customers.module.css';
import ModalCustomers from '../modalCustomers/ModalCustomers';

const Customers = () => {
    const [selectedCliente, setSelectedCliente] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const clientesInfo = [{
        name: "hola",
        tiempo: "7 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-1024x576.png",
        urlTestimonio: "",
        personaTestimonio: "Pepe(Ceo)"
    },{
        name: "bgp",
        tiempo: "2 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
        urlTestimonio: "",
        personaTestimonio: "Armel(Ceo)"
    },{
        name: "mine",
        tiempo: "3 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://w7.pngwing.com/pngs/493/809/png-transparent-kik-messenger-messaging-apps-mobile-app-kin-app-store-iphone-electronics-text-logo.png",
        urlTestimonio: "",
        personaTestimonio: "Man(Ceo)"
    },{
        name: "rara",
        tiempo: "1 mes",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://i.pinimg.com/550x/82/b2/1f/82b21fe6d9166c673eed585a5fc38ef5.jpg",
        urlTestimonio: "",
        personaTestimonio: "Juan(Ceo)"
    },{
        name: "lla",
        tiempo: "6 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
        urlTestimonio: "",
        personaTestimonio: "Richi(Ceo)"
    },{
        name: "d",
        tiempo: "9 meses",
        Resultado: "Aumente las ventas en un 90%",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg59LNMeZr1VIsx1KJD0yROPeEzm5wWrU09cHhu1xbQ&s",
        urlTestimonio: "",
        personaTestimonio: "Marta(Ceo)"
    }];

   

    return (
        <div>
            <h3>Customers</h3>
            <div className={style.scrollContainer}>
                {clientesInfo.map((cliente, index) => (
                    <img
                        key={index}
                        onClick={() =>{
                            setModalVisible(true)
                            setSelectedCliente(cliente)}
                        }
                        src={cliente.imgEmpresa}
                        alt={cliente.name}
                    />
                ))}
            </div>
           <ModalCustomers selectedCliente={selectedCliente} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </div>
    );
};

export default Customers;
