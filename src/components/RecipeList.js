import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './sass/RecipeList.scss';
import recipes from '../data/recipesData';

const RecipeList = ({ initialSearchTerm, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
  const [sortByPrepTime, setSortByPrepTime] = useState(false);
  const [sortByServings, setSortByServings] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
    const matchesSearchTerm = searchTerm
      ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : true;
    return matchesCategory && matchesSearchTerm;
  });

  const sortedRecipes = filteredRecipes.sort((a, b) => {
    if (sortByPrepTime) {
      const timeA = parseInt(a.prepTime.match(/\d+/)?.[0] || '0', 10);
      const timeB = parseInt(b.prepTime.match(/\d+/)?.[0] || '0', 10);
      return timeA - timeB;
    } else if (sortByServings) {
      return a.servings - b.servings;
    }
    return 0;
  });

  return (
    <div id="recipeList-container">
      <section className='recipe-filters'>
        <div className='btn-filters'>
          <button
            className={`filter-prepTime ${sortByPrepTime ? 'active' : ''}`}
            onClick={() => {
              setSortByPrepTime(!sortByPrepTime);
              setSortByServings(false);
            }}
          >
            Tempo de preparo
            <span className="material-symbols-outlined">
              {sortByPrepTime ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
            </span>
          </button>
          <button
            className={`filter-servings ${sortByServings ? 'active' : ''}`}
            onClick={() => {
              setSortByServings(!sortByServings);
              setSortByPrepTime(false);
            }}
          >
            Quantidade de Porções
            <span className="material-symbols-outlined">
              {sortByServings ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
            </span>
          </button>
        </div>
        <div className="search-header">
          <input
            type="text"
            placeholder="Buscar por receitas ou ingredientes"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="material-symbols-outlined">search</span>
        </div>
      </section>

      {sortedRecipes.length > 0 ? (
        <section className='recipes-container'>
          {sortedRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      ) : (
        <h2 className='no-recipe'>
          Nenhum prato encontrado
          <img src='assets/Dinner.svg' alt="Nenhum prato encontrado" />
        </h2>
      )}
    </div>
  );
};

export default RecipeList;
