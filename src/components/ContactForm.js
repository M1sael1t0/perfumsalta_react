import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, recibimos tu pedido (Simulación).`);
  };

  return (
    <section id="formulario" style={{ marginTop: '40px' }}>
      <h2>Formulario de Pedido</h2>
      <form id="form-pedido" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" required onChange={handleChange} className="input-form"/>
        
        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" required onChange={handleChange} className="input-form"/>
        
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" rows="4" placeholder="Escribe aquí..." onChange={handleChange} className="input-form"></textarea>
        
        <button type="submit" style={{ marginTop: '10px' }}>Enviar Pedido</button>
      </form>
    </section>
  );
}

export default ContactForm;