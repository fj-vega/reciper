import React, { useEffect, useState } from 'react';
import './App.css';
import './svg-bg.css';
import SearchBar from './components/SearchBar';
import RecipesContainer from './components/RecipesContainer';
import Spinner from './components/Spinner';
import { getRecipes } from './api';


export default () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const recipes = await getRecipes(query);
      setRecipes(recipes);
      setLoading(false);
    })()
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const searchQuery = e => {
    e.preventDefault();
    setLoading(true);
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <small className="warning">The application is limited to 5 requests per minute</small>

      <div className="App-body">
        <h1 className="App-header">
          Search for a recipe
        </h1>
        
        <SearchBar 
          search={ search } 
          searchQuery={ searchQuery } 
          updateSearch= { updateSearch } />

        {
          loading ? <Spinner /> : <RecipesContainer recipes={ recipes } />
        }
      </div>

      <footer className="footer">
        <p>
          Coded and designed by <a className="footer-link" href="https://fj-vega.github.io/myportfolio/">FJ</a> &copy;2019
        </p>
      </footer>
    </div>
  )
};
