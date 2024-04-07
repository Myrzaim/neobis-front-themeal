import React from 'react';
import './Search.css';

const Search = () => {
  const SEARCH_API = "www.themealdb.com/api/json/v1/1/search.php?s=";
  const [getMeal, setGetMeal] = useState([]);

  useEffect(() => {
    axios.get(DETAILS_API + name).then((data) => setGetMeal(data.data.meals[0]));
  }, []);

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