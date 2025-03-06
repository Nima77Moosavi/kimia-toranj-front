import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { TiHeart } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.icons}>
          <span>
            <FaCartShopping />
          </span>
          <span>
            <TiHeart />
          </span>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.button}>ورود | ثبت نام</button>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.hamburgerMenu}>
          <span>
            <IoMenu />
          </span>
        </div>
        <div className={styles.searchBox}>
          <input type="text" placeholder="جستجو کنید..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
