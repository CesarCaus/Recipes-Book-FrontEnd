import React from 'react';
import './sass/Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ onSearchChange, onCategorySelect }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <header>
      <h1>Livro de Receitas</h1>

      <nav>
        <Link to="/" onClick={() => handleCategorySelect('')}>Início</Link>
        <Link to="/breakfast" onClick={() => handleCategorySelect('breakfast')}>Café da manhã</Link>
        <Link to="/lunch" onClick={() => handleCategorySelect('lunch')}>Almoço</Link>
        <Link to="/dinner" onClick={() => handleCategorySelect('dinner')}>Jantar</Link>
        <Link to="/dessert" onClick={() => handleCategorySelect('dessert')}>Sobremesas</Link>
        <Link to="/salty" onClick={() => handleCategorySelect('salty')}>Salgados</Link>
      </nav>

    </header>
  );
};

export default Header;
