import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardMeal from "./components/CardMeal/CardMeal";
import Home from "./components/Home/Home";
import MealDetail from "./components/MealDetail/MealDetail";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<MealDetail />} />
      </Routes>
    </div>
  );
}

export default App;
