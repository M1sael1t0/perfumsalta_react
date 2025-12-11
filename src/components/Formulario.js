import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Pedido enviado! (Simulación)");
  };

  return (
    <section id="formulario" className="col-xs-12">
      <h2>Formulario de Pedido</h2>
      <form id="form-pedido" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" required onChange={handleChange} />
        
        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" required onChange={handleChange} />
        
        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" type="tel" onChange={handleChange} />
        
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" rows="4" placeholder="Escribe aquí..." onChange={handleChange}></textarea>
        
        <button type="submit">Enviar Pedido</button>
      </form>
    </section>
  );
}

export default ContactForm;