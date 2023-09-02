import React from "react";
import cocktailData from "../../cocktailData";

const AllRecipes = (props) => {
  return (
    <div className="searchResults">
      {cocktailData.map((cocktail) => {
        return (
          <div>
            <img className="fitting-image" src={cocktail.img} />
            <h2>{cocktail.cocktailName}</h2>
            <ul>
              {cocktail.recipe.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <ul>
              {cocktail.directions.map((step) => {
                return <li>{step}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AllRecipes;
