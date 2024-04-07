import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MealDetail from "./components/MealDetail/MealDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<MealDetail />} />
      </Routes>
    </div>
  );
}

export default App;
