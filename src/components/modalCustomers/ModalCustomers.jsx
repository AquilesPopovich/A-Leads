import React from 'react'
import style from './modalCustomers.module.css'

const ModalCustomers = ({selectedCliente, modalVisible, setModalVisible}) => {

    if(!modalVisible) return null

  return (
        
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <span className={style.close} onClick={()=> setModalVisible(false)}>
                            &times;
                        </span>
                        <h2>{selectedCliente.name}</h2>
                        <p>Tiempo: {selectedCliente.tiempo}</p>
                        <p>Resultado: {selectedCliente.Resultado}</p>
                        <p>Persona Testimonio: {selectedCliente.personaTestimonio}</p>
                    </div>
                
    </div>
  )
}

export default ModalCustomers