import React from "react";
import styles from "../styles/NoMatches.module.css";

const NoMatch = (props) => {
  return (
    <div>
      <h1 className={styles.deny}>
        Sorry, you cannot cocktail with these ingredients.
      </h1>
    </div>
  );
};
export default NoMatch;
