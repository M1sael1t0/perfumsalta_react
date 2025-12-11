import React from 'react';
import logoImg from '../assets/logo.png'; 

function Header({ contadorCarrito, toggleDarkMode, isDarkMode, openCart }) {
  return (
    <header id="top">
      
      {/* 1. SECCIÓN IZQUIERDA: Logo y Título */}
      <div className="header-left">
        <a href="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src={logoImg} 
            alt="Logo Perfums Alta" 
            className="header-logo" 
          /> 
          <span className="brand-name">Perfums Alta</span>
        </a>
      </div>
      
      {/* 2. SECCIÓN CENTRO: El Eslogan */}
      <div className="header-center">
        <p>Venta de perfumería de Diseñador, Árabe y Nicho.</p>
      </div>

      {/* 3. SECCIÓN DERECHA: Menú + Modo Oscuro + Carrito */}
      <div className="header-right">
        
        {/* Navegación */}
        <nav aria-label="Navegación principal">
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#formulario">Pedido</a></li>
          </ul>
        </nav>

        {/* Botón Modo Oscuro */}
        <button 
          id="modo-oscuro-btn" 
          title="Activar modo oscuro" 
          onClick={toggleDarkMode}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* Carrito */}
        <div 
          className="carrito-contenedor" 
          onClick={openCart} 
          title="Ver carrito"
        >
           <span style={{ fontSize: '1.4rem' }}>🛒</span>
           <span className="contador-carrito">{contadorCarrito}</span>
        </div>

      </div>
    </header>
  );
}

export default Header;