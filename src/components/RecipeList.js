import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './sass/RecipeList.scss';
import recipes from '../data/recipesData';

const RecipeList = ({ searchTerm, selectedCategory }) => {
  const [sortByPrepTime, setSortByPrepTime] = useState(false);
  const [sortByServings, setSortByServings] = useState(false);

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
      const timeA = parseInt(a.prepTime.match(/\d+/)[0]);
      const timeB = parseInt(b.prepTime.match(/\d+/)[0]);
      return timeA - timeB;
    } else if (sortByServings) {
      return a.servings - b.servings;
    }
    return 0;
  });

  return (
    <div id="recipeList-container">
      {sortedRecipes.length > 0 ? <section className='recipe-filters'>
        <button
          className={`filter-prepTime ${sortByPrepTime ? 'active' : ''}`}
          onClick={() => {
            setSortByPrepTime(!sortByPrepTime);
            setSortByServings(false);
          }}
        >
          Tempo de preparo {sortByPrepTime ?
            <span className="material-symbols-outlined">keyboard_arrow_down</span> :
            <span className="material-symbols-outlined">keyboard_arrow_right</span>}
        </button>
        <button
          className={`filter-servings ${sortByServings ? 'active' : ''}`}
          onClick={() => {
            setSortByServings(!sortByServings);
            setSortByPrepTime(false);
          }}
        >
          Quantidade de Porções {sortByServings ?
            <span className="material-symbols-outlined">keyboard_arrow_down</span> :
            <span className="material-symbols-outlined">keyboard_arrow_right</span>}
        </button>
      </section> : ''}

      {sortedRecipes.length > 0 ? (
        <section className='recipes-container'>
          {sortedRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      ) : (
        <h2 className='no-recipe'>
          Nenhum prato encontrado <img src='assets/Dinner.svg' alt="Nenhum prato encontrado" />
        </h2>
      )}
    </div>
  );
};

export default RecipeList;
