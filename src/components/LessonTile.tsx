import React from "react";
import styles from "./LessonTile.module.css";
import { Link } from "react-router-dom";

interface LessonTileProps{
    unitNo:number;
    stars:0|1|2|3;
    highscore:number;

}

const LessonTile: React.FC<LessonTileProps> = ({unitNo,stars,highscore}) => {

    return (
      <div className={styles.lessonTile}>
        <div className={styles.unitNo}>Unit{unitNo}</div>
        <div className={styles.stars}>
          {"★".repeat(stars) + "☆".repeat(3 - stars)}
        </div>
        <Link to="/lesDis">
          <button id={styles.playButton}>Play</button>
        </Link>
        <div className={styles.highscore}>{highscore}</div>
      </div>
    );
};

export default LessonTile;
