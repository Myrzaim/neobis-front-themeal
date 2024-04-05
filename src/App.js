import "./App.css";
import Home from "./components/Navbar/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Search />
    </div>
  );
}

export default App;
