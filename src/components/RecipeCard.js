import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sass/RecipeCard.scss';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={`Imagem de ${recipe.title}`} />
      </div>
      <h2>{recipe.title}</h2>
      <p className="truncated-paragraph">{recipe.description}</p>
      <span className="prepTime">{recipe.prepTime}</span>
      <span className="view-details">
        <Link to={`/recipe/${recipe.id}`}>Ver receita</Link>
      </span>
    </div>
  );
};

export default RecipeCard;
