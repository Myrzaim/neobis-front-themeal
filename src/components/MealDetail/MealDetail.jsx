import React from "react";
import "./MealDetail.css";

const MealDetail = () => {
  return (
    <div className="MealDetail">
      <div className="first-section">
        <div className="left">
          <p className="title">Gigantes Plaki</p>
          <p>Vegetarian | Greek</p>
          <div className="ingredients">
            <p>
              - Mozarella <b>200gr</b>
            </p>
            <p>
              - Mozarella <b>200gr</b>
            </p>
          </div>
        </div>
        <div className="right">
          <img
            className="img"
            src="https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg"
            alt="meal"
          />
        </div>
      </div>
      <div className="second-section">
        <h2>Instruction</h2>
        <p>
          Bring a large saucepan of salted water to the boil Add the pasta, stir
          once and cook for about 10 minutes or as directed on the packet.
          Meanwhile, wash the tomatoes and cut into quarters. Slice the olives.
          Wash the basil. Put the tomatoes into a salad bowl and tear the basil
          leaves over them. Add a tablespoon of olive oil and mix. When the
          pasta is ready, drain into a colander and run cold water over it to
          cool it quickly. Toss the pasta into the salad bowl with the tomatoes
          and basil. Add the sliced olives, drained mozzarella balls, and chunks
          of tuna. Mix well and let the salad rest for at least half an hour to
          allow the flavours to mingle. Sprinkle the pasta with a generous grind
          of black pepper and drizzle with the remaining olive oil just before
          serving.
        </p>
        <a
          className="meal-detail-youtube"
          href="https://www.youtube.com/watch?v=e52IL8zYmaE"
        >
          Watch on Youtube
        </a>
      </div>
    </div>
  );
};

export default MealDetail;
