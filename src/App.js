import React, { useEffect, useState } from 'react';
import './App.css';
import './svg-bg.css';
import SearchBar from './components/SearchBar';
import RecipesContainer from './components/RecipesContainer';
import api from './api';


export default () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const searchQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRecipes = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}`;

    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <div className="App-body">
        <h1 className="App-header">
          Search for a recipe
        </h1>
        
        <SearchBar 
          search={ search } 
          searchQuery={ searchQuery } 
          updateSearch= { updateSearch } />

        <RecipesContainer recipes={ recipes } />
      </div>

      <footer className="footer">
        <p>
          Coded and designed by <a className="footer-link" href="https://fj-vega.github.io/myportfolio/">FJ</a> &copy;2019
        </p>
      </footer>
    </div>
  )
};
