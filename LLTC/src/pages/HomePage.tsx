import React from "react";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageHeading}>Let"s Learn The Constitution</h1>
      <button id={styles.playBtn}>Play</button>

      <button id={styles.settingsBtn}>&#9881;</button>
      <button id={styles.aboutBtn}>&#8505;</button>
    </div>
  );
};
export default HomePage;
