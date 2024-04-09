import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const RANDOM_API = "https://www.themealdb.com/api/json/v1/1/random.php";
const Home = () => {
  const [getMeal, setGetMeal] = useState([]);
  const [inpSearch, setInpSearch] = useState("");
  const [searchMeal, setSearchMeal] = useState([]);

  useEffect(() => {
    axios.get(RANDOM_API).then((data) => setGetMeal(data.data.meals[0]));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inpSearch}`
        )
        .then((data) => {
          setSearchMeal(data.data.meals);
          console.log(searchMeal);
        });
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  return (
    <>
      <div className="home">
        <div className="left">
          <h2>Meal of the Day</h2>

          <Link className="detailLink" to={`/Detail/${getMeal.idMeal}`}>
            <p className="title">{getMeal.strMeal}</p>
          </Link>

          <p>
            {getMeal.strCategory} | {getMeal.strArea}
          </p>
        </div>
        <div className="right">
          <img className="img" src={getMeal.strMealThumb} alt="meal" />
        </div>
      </div>
      <div className="search">
        <h2>Find Your Meal</h2>
        <form className="search__block" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Find your meal"
            value={inpSearch}
            onChange={(e) => setInpSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {searchMeal.map((item) => {
        return (
          <div className="CardMeal" key={item.idMeal}>
            <div className="left">
              <Link className="detailLink" to={`/Detail/${item.idMeal}`}>
                <p className="title">{item.strMeal}</p>
              </Link>

              <p>
                {item.strCategory} | {item.strArea}
              </p>
            </div>
            <div className="right">
              <img className="img" src={item.strMealThumb} alt="meal" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
