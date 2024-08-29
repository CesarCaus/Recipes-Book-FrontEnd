import React from 'react';
import './sass/Header.scss';
import { Link } from 'react-router-dom';
import LoginHeaderComponent from './LoginHeaderComponent';

const Header = ({ onSearchChange, onCategorySelect }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value); // Chama a função passada como prop
  };

  const handleCategorySelect = (category) => {
    onCategorySelect(category); // Chama a função passada como prop
  };

  return (
    <header>
      <h1>Livro de Receitas</h1>
      <img src="/assets/background-image.svg" alt="Background" />
      <div className="search-header">
        <input
          type="text"
          placeholder="Buscar por receitas ou ingredientes"
          onChange={handleSearchChange}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
      <nav>
        <Link to="/" onClick={() => handleCategorySelect('')}>Início</Link>
        <Link to="/breakfast" onClick={() => handleCategorySelect('breakfast')}>Café da manhã</Link>
        <Link to="/lunch" onClick={() => handleCategorySelect('lunch')}>Almoço</Link>
        <Link to="/dinner" onClick={() => handleCategorySelect('dinner')}>Jantar</Link>
        <Link to="/dessert" onClick={() => handleCategorySelect('dessert')}>Sobremesas</Link>
        <Link to="/salty" onClick={() => handleCategorySelect('salty')}>Salgados</Link>
      </nav>
      <LoginHeaderComponent />
    </header>
  );
};

export default Header;
