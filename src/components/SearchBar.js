import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, categoria, setCategoria }) {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Buscar perfume..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      <select 
        value={categoria} 
        onChange={(e) => setCategoria(e.target.value)}
        className="category-select"
      >
        <option value="todos">Todas las categorías</option>
        <option value="hombres">Hombres</option>
        <option value="mujeres">Mujeres</option>
      </select>
    </div>
  );
}

export default SearchBar;