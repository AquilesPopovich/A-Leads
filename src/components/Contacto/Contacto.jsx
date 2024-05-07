import React, { useState } from 'react';
import styles from './Contacto.module.css'; // Importar el archivo CSS del módulo

const Contacto = () => {
  // Estado para los campos del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos a un servidor
    console.log('Formulario enviado:', formulario);
    // Puedes agregar aquí la lógica para enviar los datos a tu backend
  };

  return (
    <div className={styles.contacto}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="servicio">Selecciona el servicio:</label>
          <select
            id="servicio"
            name="servicio"
            value={formulario.servicio}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="Servicio 1">Servicio 1</option>
            <option value="Servicio 2">Servicio 2</option>
            <option value="Servicio 3">Servicio 3</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className={styles.btn} type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
