import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.navButton}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
