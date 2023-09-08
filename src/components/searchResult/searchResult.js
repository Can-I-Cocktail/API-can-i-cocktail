import React from "react";
import styles from "../styles/SearchResult.module.css";

const SearchResult = ({ matches }) => {
  return (
    <div>
      <h1 className={styles.affirm}>You can cocktail!</h1>
      <div className={styles.searchResultContainer}>
        {matches.map((cocktail) => {
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
    </div>
  );
};

export default SearchResult;
