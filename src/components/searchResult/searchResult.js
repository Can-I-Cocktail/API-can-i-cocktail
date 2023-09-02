import React from "react";

const SearchResult = ({ matches }) => {
  return (
    <div>
      <h1>You can cocktail!</h1>
      <div className="searchResults">
        {matches.map((cocktail) => {
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
    </div>
  );
};

export default SearchResult;
