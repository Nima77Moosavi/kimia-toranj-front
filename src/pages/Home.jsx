import React from "react";
import Header from "../components/Header/Header";
import Highlights from "../components/Highlights/Highlights"; // Import the Highlights component
import Collections from "../components/Collections/Collections"
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <h2>Welcome to My Brand</h2>
        <p>This is the home page. Highlights will be displayed here.</p>
        <Highlights /> {/* Add the Highlights component here */}
        <Collections />
      </div>
    </div>
  );
};

export default Home;
