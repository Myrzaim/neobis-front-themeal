import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';
export default configureStore({
    reducer: {
        meals: mealReducer,
    }
});