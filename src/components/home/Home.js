import React from "react";
import SearchForm from "../searchForm/SearchForm";

const Home = (props) => {
  return (
    <div>
      <h1 className="title">Can I Cocktail?</h1>
      <img className="logo" src="/neon_sign.png" />
      <h3>
        Enter up to five types of booze and ingredients to find out if you can
        make a cocktail with what’s in your bar.
      </h3>
      <SearchForm />
    </div>
  );
};

export default Home;
