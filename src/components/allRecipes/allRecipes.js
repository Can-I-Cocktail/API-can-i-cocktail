import React from "react";
import cocktailData from "../../cocktailData";
import styles from "../styles/AllRecipes.module.css";

const AllRecipes = (props) => {
  return (
    <div className={styles.allRecipesContainer}>
      {cocktailData.map((cocktail) => {
        return (
          <div className={styles.cocktailCard}>
            <img
              className={styles.image}
              src={process.env.PUBLIC_URL + "/" + cocktail.img}
              alt={cocktail.img}
            />
            <h2 className={styles.cocktailName}>{cocktail.cocktailName}</h2>
            <ul className={styles.ingredient}>
              {cocktail.recipe.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <ol className={styles.step}>
              {cocktail.directions.map((step) => {
                return <li>{step}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default AllRecipes;
