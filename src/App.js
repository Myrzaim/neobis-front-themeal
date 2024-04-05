import "./App.css";
import CardMeal from "./components/CardMeal/CardMeal";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Search />
      <CardMeal />
    </div>
  );
}

export default App;
