import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { TiHeart } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";
<<<<<<< HEAD
import { IoSearch } from "react-icons/io5"; // آیکن جستجو
<<<<<<< Updated upstream
import { Link } from "react-router-dom";

// مسیر عکس‌ها (فرضی)
import image1 from "../../assets/banner1.png";
=======

// مسیر عکس‌ها (فرضی)
import image1 from "../../assets/banner1.png";
import image2 from "../../assets/banner2.png";
>>>>>>> Stashed changes
import image3 from "../../assets/img.png";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* دایره طوسی */}
      <div className={styles.circle}></div>

<<<<<<< Updated upstream
      <div className={styles.container}>
        {/* آیکن‌ها */}
=======
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.leftSection}>
>>>>>>> parent of 575b3b8 (header changed)
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

<<<<<<< HEAD
      {/* عکس‌ها */}
      <div className={styles.images}>
        <img src={image3} alt="Image 3" className={styles.dast} />
        <img src={image1} alt="Image 1" className={styles.txt1} />
=======
      {/* عکس‌ها */}
      <div className={styles.images}>
        <img src={image1} alt="Image 1" className={styles.txt2} />
        <img src={image2} alt="Image 2" className={styles.txt1}/>
        <img src={image3} alt="Image 3" className={styles.dast}/>
      </div>

      <div className={styles.container}>
        {/* آیکن‌ها */}
        <div className={styles.icons}>
          <span>
            <FaCartShopping />
          </span>
          <span>
            <TiHeart />
          </span>
        </div>

        {/* دکمه ورود/ثبت نام */}
        <div className={styles.loginButton}>
          <button>ورود | ثبت نام</button>
        </div>

        {/* جعبه جستجو */}
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="جستجو کنید..." />
            <span className={styles.searchIcon}>
              <IoSearch />
            </span>
          </div>
        </div>

        {/* منوی همبرگر */}
        <div className={styles.hamburgerMenu}>
          <span>
            <IoMenu />
          </span>
        </div>
>>>>>>> Stashed changes
=======
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
>>>>>>> parent of 575b3b8 (header changed)
      </div>
    </header>
  );
};

export default Header;
