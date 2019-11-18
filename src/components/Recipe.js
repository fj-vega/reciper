import React from 'react';


export default ({ url, title, calories, time, image, ingredients }) => {
  const renderIngredients = () => {
    if (ingredients.length > 5) {
      ingredients = ingredients.slice(0, 5);
      ingredients.push({ truncated: true, text: '...' });
    }

    return ingredients.map((ingredient, idx) => {
      if (ingredient.truncated) {
        return <li key={ idx }className="truncated">{ ingredient.text }</li>
      } else {
        return <li key={ idx }className="recipe-ingredient">{ ingredient.text }</li>
      }
    })
  };

  return (
    <div className="recipe">
      <h2 className="recipe-title">{ title }</h2>

      <div className="recipe-cooking-info">
        <p className="recipe-calories">{ calories } Total cal</p>
        <p className="recipe-time">
          { time ? `${time} min` : 'Express recipe!' }
        </p>
      </div>

      <ul className="recipe-ingredients-list">
        { renderIngredients() }
      </ul>

      <img className="recipe-image" src={ image } alt={ title + ' picture' }/>
      <a className="recipe-link" href={ url } target="_blank">Check Recipe!</a>
    </div>
  )
};
