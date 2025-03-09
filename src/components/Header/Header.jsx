import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { TiHeart } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.icons}>
          <span className={styles.icon}>
            <FaCartShopping />
          </span>
          <span className={styles.icon}>
            <TiHeart />
          </span>
        </div>
        <Link to="/login">
          <button className={styles.button}>ورود | ثبت نام</button>
        </Link>
      </div>

      {/* Middle Logo */}
      <div className={styles.brand}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>برند شما</h1>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="جستجو کنید..." />
        </div>
        <div className={styles.hamburgerMenu}>
          <IoMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
