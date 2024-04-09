import React from "react";
import "./MealDetail.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DETAILS_API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const MealDetail = () => {
  const [getMeal, setGetMeal] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(DETAILS_API + id).then((data) => setGetMeal(data.data.meals[0]));
  }, []);

  function getIngredients(getMeal) {
    let res = [];
    for (let i = 1; i <= 20; i++) {
      let ingredient = getMeal["strIngredient" + i];
      let measure = getMeal["strMeasure" + i];
      if (ingredient != "") {
        res.push({ ingredient, measure });
      }
    }

    return res.map((item) => (
      <p>
        {item.ingredient} <b>{item.measure}</b>
      </p>
    ));
  }

  return (
    <div className="MealDetail">
      <div className="first-section">
        <div className="left">
          <p className="title">{getMeal.strMeal}</p>
          <p>
            {getMeal.strCategory} | {getMeal.strArea}
          </p>
          <div className="ingredients">{getIngredients(getMeal)}</div>
        </div>
        <div className="right">
          <img className="img" src={getMeal.strMealThumb} alt="meal" />
        </div>
      </div>
      <div className="second-section">
        <h2>Instruction</h2>
        <p>{getMeal.strInstructions} </p>
        <a className="meal-detail-youtube" href={getMeal.strYoutube}>
          Watch Youtube
        </a>
      </div>
    </div>
  );
};

export default MealDetail;
