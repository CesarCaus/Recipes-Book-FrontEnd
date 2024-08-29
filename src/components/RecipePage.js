import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data/recipesData';
import './sass/RecipePage.scss';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {

    const findRecipe = () => {

      const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id, 10));
      setRecipe(foundRecipe);
    };

    findRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <main id='recipePage-container'>
        <div className='recipe-box'>
            <section>
              <img src={recipe.image} alt={`Imagem de ${recipe.title}`} />
              <div>

                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <p><span class="material-symbols-outlined">timer</span> {recipe.prepTime}</p>
                <p>Serve até {recipe.servings} pessoas</p>
              </div>
            </section>

            <h3>Ingredientes</h3>
                <ul>
                    {recipe.ingredients.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>

            <h3>Modo de Preparo</h3>
            <p>{recipe.instructions}</p>


        </div>
    </main>

  );
};

export default RecipePage;
