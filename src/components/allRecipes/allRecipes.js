import React from "react";
import cocktailData from "../../cocktailData";
import styles from "../styles/AllRecipes.module.css";

const AllRecipes = (props) => {
  return (
    <div className="searchResults">
      {cocktailData.map((cocktail) => {
        return (
          <div className={styles.cocktailCard}>
            <img className="fitting-image" src={cocktail.img} />
            <h2 className={styles.cocktailName}>{cocktail.cocktailName}</h2>
            <ul>
              {cocktail.recipe.map((ingredient) => {
                return <li className={styles.ingredient}>{ingredient}</li>;
              })}
            </ul>
            <ol>
              {cocktail.directions.map((step) => {
                return <li className={styles.step}>{step}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default AllRecipes;
