import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Browse All Recipes</Link>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
