import React from "react";
import "./CardMeal.css";
import { Link } from 'react-router-dom';

const CardMeal = () => {
  return (
    <div className="CardMeal">
      <div className="left">
        <p className="title">  <Link to="/Detail"> Gigantes Plaki</Link></p>
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
  );
};

export default CardMeal;
