import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png"
import { IoMenu } from "react-icons/io5";
import { TiHeart } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <h1>کیمیا ترنج<img src={logo} alt="" className={styles.logo}/></h1>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.button}>ورود | ثبت نام</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.hamburgerMenu}>
          <span><IoMenu /></span>
        </div>
        <div className={styles.searchBox}>
          <input type="text" placeholder="جستجو کنید..." />
        </div>
        <div className={styles.icons}>
          <span><FaCartShopping /></span>
          <span><TiHeart /></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
