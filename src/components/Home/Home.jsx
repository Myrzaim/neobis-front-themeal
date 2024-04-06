import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <h2>Meal of the Day</h2>
          <p className="title">
            <Link to="/Detail">Gigantes Plaki</Link>
          </p>
          <p>Vegetarian | Greek</p>
        </div>
        <div className="right">
          <img
            className="img"
            src="https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg"
            alt="meal"
          />
        </div>
      </div>
      <Search />
    </>
  );
};

export default Home;
