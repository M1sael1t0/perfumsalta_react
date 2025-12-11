import React from 'react';

function ProductList({ titulo, idSeccion, productos, agregarAlCarrito }) {
  return (
    <section>
      <h2 id={idSeccion} style={{ marginTop: '40px', borderBottom: '3px solid #e9c46a' }}>{titulo}</h2>
      <div className="row">
        {productos.map((prod) => (
          <div className="col-xs-12 col-md-6 col-lg-4" key={prod.id} style={{ padding: '10px' }}>
            <article className="producto">
              
              {prod.badge && <div className="badge">{prod.badge}</div>}
              
              <img src={prod.imagen} alt={prod.nombre} className="img-producto" />
              
              <h3>{prod.nombre} <small>({prod.marca})</small></h3>
              <p className="descripcion">{prod.descripcion}</p>
              <p className="precio">{prod.precio}</p>
              
              <button 
                  className="btn-agregar-carrito" 
                  onClick={() => agregarAlCarrito(prod)}
              >
                  Añadir al Carrito
              </button>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;