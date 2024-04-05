import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h2>Meal of the Day</h2>
        <p className="title">Gigantes Plaki</p>
        <p>Vegetarian | Greek</p>
      </div>
      <div className="right">
        <img className="img"
          src="https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg"
          alt="meal"
        />
      </div>
    </div>
  );
};

export default Home;
