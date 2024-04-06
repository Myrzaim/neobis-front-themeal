import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function getRandomMeal() {
  axios({
    method: "get",
    url: "https://www.themealdb.com/api/json/v1/1/random.php",
  }).then(function (response) {
    // console.log(response.data.meals[0]);
    return response.data.meals[0];
  });
}

const mealSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
  },
  reducers: {
    getRandMeal(state, action) {
      getRandomMeal();
      state.meals = action.payload.meals;
      console.log(state.meals);
    },
  },
});

export const { getRandMeal } = mealSlice.actions;

export default mealSlice.reducer;
