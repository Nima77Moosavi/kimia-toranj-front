import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <h1>My Brand</h1>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.button}>Login</button>
          <button className={styles.button}>Sign Up</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.hamburgerMenu}>
          <span>☰</span>
        </div>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.icons}>
          <span>🛒</span>
          <span>❤️</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
