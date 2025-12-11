import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de instalar react-icons

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CartModal from './components/CartModal'; // <--- Nuevo
import SearchBar from './components/SearchBar'; // <--- Nuevo

// Datos
import { productosHombres, productosMujeres } from './data/productos';

function App() {
  // --- ESTADOS ---
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Estados para búsqueda y filtro
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFilter, setCategoriaFilter] = useState("todos");

  // --- LÓGICA DE CARRITO ---

  // Agregar: Si existe, suma cantidad. Si no, lo crea con cantidad 1.
  const addToCart = (product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCart, { ...product, cantidad: 1 }];
    });
    setIsCartOpen(true); // Abrir carrito al agregar
  };

  // Quitar del carrito
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Editar cantidad (+ o -)
  const updateQuantity = (id, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.cantidad + amount); // Evitar negativos
        return { ...item, cantidad: newQuantity };
      }
      return item;
    }));
  };

  // Calcular Total (Convirtiendo "$2,800" a número)
  const total = cart.reduce((acc, item) => {
    const precioNumerico = parseFloat(item.precio.replace(/[^0-9.-]+/g,""));
    return acc + (precioNumerico * item.cantidad);
  }, 0);

  // --- LÓGICA DE FILTRADO ---
  
  // Unimos todos los productos en una sola lista para filtrar fácil
  const allProducts = useMemo(() => {
    // Añadimos una propiedad "genero" a los datos originales para poder filtrar
    const hombres = productosHombres.map(p => ({...p, genero: 'hombres'}));
    const mujeres = productosMujeres.map(p => ({...p, genero: 'mujeres'}));
    return [...hombres, ...mujeres];
  }, []);

  // Filtro dinámico
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoriaFilter === "todos" || product.genero === categoriaFilter;
    return matchesSearch && matchesCategory;
  });

  // --- EFECTOS ---
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode-active' : ''}`}>
      
      {/* Pasamos la función para abrir el modal */}
      <Header 
        contadorCarrito={cart.reduce((acc, item) => acc + item.cantidad, 0)} 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode}
        openCart={() => setIsCartOpen(true)} // Nueva prop
      />

      <main>
        <Hero />

        {/* BUSCADOR AVANZADO */}
        <section className="container-search">
           <SearchBar 
             searchTerm={searchTerm} 
             setSearchTerm={setSearchTerm}
             categoria={categoriaFilter}
             setCategoria={setCategoriaFilter}
           />
        </section>

        {/* MOSTRAMOS PRODUCTOS FILTRADOS */}
        {/* Usamos un solo ProductList dinámico basado en la búsqueda */}
        <ProductList 
            titulo={searchTerm ? `Resultados para "${searchTerm}"` : "Nuestro Catálogo"}
            idSeccion="catalogo"
            productos={filteredProducts} 
            agregarAlCarrito={addToCart}
        />

        <ContactForm />
      </main>

      <Footer />

      {/* MODAL DEL CARRITO */}
      <CartModal 
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        total={total}
      />

    </div>
  );
}

export default App;