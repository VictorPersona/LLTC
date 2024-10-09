import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageHeading}>Let's Learn The Constitution</h1>
      {
        <>
          <Link to="/lessons">
            <button id={styles.playBtn}>Play</button>
          </Link>
          <Link to="/about">
            {" "}
            <button id={styles.aboutBtn}>&#8505;</button>
          </Link>
          <Link to="/settings">
            <button id={styles.settingsBtn}>&#9881;</button>
          </Link>
        </>
      }
    </div>
  );
};
export default HomePage;
