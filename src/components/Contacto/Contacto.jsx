import React, { useState } from 'react';
import style from './Contacto.module.css';

const Contacto = ({ language }) => {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={`${style.cols} ${style.col0}`}>
          <h2>{language === 'es' ? 'Contáctanos' : 'Contact Us'}</h2>
          <p>{language === 'es' ? 'Primer paso para automatizar tu generación de leads.' : 'Ready to take the next step toward success?'}</p>
        </div>
        <div className={`${style.cols} ${style.col1}`}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">{language === 'es' ? '*Nombre' : '*Name'}</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={language === 'es' ? 'Ej: Mariano Cesar' : 'E.g: John Doe'}
              type="text"
            />
            <label htmlFor="email">{language === 'es' ? '*Correo electrónico' : '*Email'}</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={language === 'es' ? 'Ej: mariano@gmail.com' : 'E.g: john@example.com'}
              type="email"
            />
            <label htmlFor="number">{language === 'es' ? '*Número' : '*Number'}</label>
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder=""
              type="number"
            />
            <label htmlFor="message">{language === 'es' ? '*Mensaje' : '*Message'}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={language === 'es' ? 'Escribe tu mensaje aquí' : 'Write your message here'}
            />
            <p>({language === 'es' ? '*' : '*'} {language === 'es' ? 'Campos requeridos' : 'Required fields'})</p>
            <button type="submit">{language === 'es' ? 'Enviar' : 'Submit'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
