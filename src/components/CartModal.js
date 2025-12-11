import React from 'react';
import { FaTrash, FaTimes, FaPlus, FaMinus } from 'react-icons/fa'; // Iconos

function CartModal({ cart, isOpen, onClose, updateQuantity, removeFromCart, total }) {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button onClick={onClose} className="close-btn"><FaTimes /></button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} />
                
                <div className="item-details">
                  <h4>{item.nombre}</h4>
                  <p>{item.precio}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-btn">Proceder al Pago</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;