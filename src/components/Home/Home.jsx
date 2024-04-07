import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const RANDOM_API = "https://www.themealdb.com/api/json/v1/1/random.php";
const Home = () => {
  const [getMeal, setGetMeal] = useState([]);

  useEffect(() => {
    axios.get(RANDOM_API).then((data) => setGetMeal(data.data.meals[0]));
  }, []);

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
      <Search />
    </>
  );
};

export default Home;
