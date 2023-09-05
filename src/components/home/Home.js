import React from "react";
import SearchForm from "../searchForm/SearchForm";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  return (
    <div>
      <h1 className={styles.title}>Can I Cocktail?</h1>
      <img className={styles.logo} src="/neon_sign.png" />
      <h3 className={styles.instructions}>
        Enter up to five types of booze and ingredients to find out if you can
        make a cocktail with the random items in your bar.
      </h3>
      <SearchForm />
    </div>
  );
};

export default Home;
