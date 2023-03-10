import React from "react";
import SearchForm from "../searchForm/SearchForm";

const Home = (props) => {
  return (
    <div>
      <h1>Can I Cocktail?</h1>
      <h3>
        Enter up to five types of booze and ingredients to find a matching
        cocktail recipe
      </h3>
      <SearchForm />
    </div>
  );
};

export default Home;
