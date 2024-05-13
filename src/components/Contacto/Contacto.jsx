import React, { useState } from 'react'
import style from './Contacto.module.css'

const Contacto = () => {

  const [form, setForm] = useState({name: '', email: '', number: ''})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () =>{

  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={`${style.cols} ${style.col0}`}>
          <h2>Contactanos</h2>
          <p>Ready to take the next step toward success?</p>
        </div>
        <div className={`${style.cols} ${style.col1}`}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">*Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Ej: Mariano Cesar" type="text" />
          <label htmlFor="">*Email</label>

            <input name="email" value={form.email} onChange={handleChange} placeholder="Ej: mariano@gmail.com" type="email" />
          <label htmlFor="">*Number</label>

            <input name="number" value={form.number} onChange={handleChange} placeholder="" type="number" />
            <p>(*) Campos requeridos</p>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto