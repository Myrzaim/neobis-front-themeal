import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">The Meal</Link>
    </div>
  );
};

export default Navbar;
