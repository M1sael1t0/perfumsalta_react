import React from 'react';

function Footer() {
  return (
    <footer id="contacto-footer">
      <div className="footer-contenido">
        
        {/* Columna 1: Navegación */}
        <div className="footer-columna">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#catalogo-hombres">Hombres</a></li>
            <li><a href="#catalogo-mujeres">Mujeres</a></li>
            <li><a href="#formulario">Hacer Pedido</a></li>
          </ul>
        </div>
        
        {/* Columna 2: Contacto */}
        <div className="footer-columna">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/perfumsalta" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://wa.me/529514348365?text=Hola%20qu%C3%A9%20tal%20PerfumsAlta%2C%20quiero%20cotizar%20un%20perfume!" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li><a href="mailto:perfumsalta@gmail.com">Gmail</a></li>
            <li><a href="tel:+529514348365">Teléfono</a></li>
          </ul>
        </div>

        {/* Columna 3: Enlaces de Interés */}
        <div className="footer-columna">
          <h3>Enlaces de Interés</h3>
          <ul>
            <li>
              <a href="https://www.fragrantica.es/" target="_blank" rel="noopener noreferrer">Visita Fragrantica</a>
            </li>
            <li><a href="#top">Volver al inicio</a></li>
          </ul>
        </div>
      </div>

      <p className="copyright">© 2025 Perfums Alta.</p>

      {/* Badges de validación */}
      <div className="contenedor-badges">
        
        <a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" rel="noopener noreferrer">
          <img 
            style={{ border: '0', width: '88px', height: '31px' }}
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="¡CSS Válido!" 
          />
        </a>

        <a href="https://validator.w3.org/check?uri=referer" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" 
            width="32" 
            height="32" 
            alt="HTML5 Válido" 
            title="HTML5 Válido" 
            style={{ border: '0' }} 
          />
        </a>

        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
          alt="JavaScript" 
          title="JavaScript Incorporado" 
          style={{ width: '32px', height: '32px', borderRadius: '5px' }} 
        />

      </div>
    </footer>
  );
}

export default Footer;