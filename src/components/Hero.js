import React from 'react';

function Hero() {
  return (
    <section id="hero">
      {/* La capa oscura ya está en el CSS con ::before */}
      <div className="hero-contenido">
        <h2>Colección Exclusiva</h2>
        <p>Descubre las fragancias que definen tu estilo.</p>
        
        {/* AQUÍ ESTÁ EL CAMBIO: Usamos 'a' en lugar de 'button' */}
        <a href="#catalogo" className="btn-hero">
          Ver Catálogo
        </a>
        
      </div>
    </section>
  );
}

export default Hero;