import React from 'react';
import './Search.css';

const Search = () => {
  return (
      <div className='search'>
          <h2>Find Your Meal</h2>
          <form className='search__block'>
              <input type="text" placeholder='Find your meal' />
              <button type='submit'>Search</button>
          </form>
    </div>
  )
}

export default Search