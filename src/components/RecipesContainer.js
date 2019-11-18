import React from 'react';
import Recipe from './Recipe';


export default ({ recipes }) => (
  <div className="recipes-container">
    { recipes.map(recipe => {
      const { url, uri, label, calories, totalTime, image, ingredients } = recipe.recipe;

      return (
        <Recipe 
          key={ uri }
          url={ url } 
          title={ label } 
          calories={ calories.toFixed(2) }
          time={ totalTime } 
          image={ image } 
          ingredients= { ingredients }
        />
      )
    }) }
  </div>
);
