import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.linksContainer}>
        <Link to="/*" className={styles.navLink}>
          Home
        </Link>
        <Link to="/recipes" className={styles.navLink}>
          Browse All Recipes
        </Link>
      </nav>
      <hr className={styles.hr} />
    </div>
  );
};

export default Navbar;
