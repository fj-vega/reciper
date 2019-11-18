import React from 'react';


export default ({ search, searchQuery, updateSearch}) => (
  <form className="search-form" onSubmit={ searchQuery }>
    <input className="search-bar" type="text" value={ search } onChange={ updateSearch } />
    <button className="search-button">
      Search
    </button>
  </form>
);
