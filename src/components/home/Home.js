import React from "react";
import SearchForm from "../searchForm/SearchForm";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleLogoContainer}>
        <h1 className={styles.title}>Can I Cocktail?</h1>
        <img
          className={styles.logo}
          src="/neon_sign.png"
          alt="neon sign of a butler's arm and hand holding a drink tray with a martini glass that has an olive with skewer "
        />
      </div>
      <h3 className={styles.instructions}>
        Enter up to five types of booze and ingredients to find out if you can
        make a cocktail with the random items in your bar.
      </h3>
      <SearchForm />
    </div>
  );
};

export default Home;
