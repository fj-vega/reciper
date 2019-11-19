const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;


export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data.hits;
};
