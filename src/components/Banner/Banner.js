import React from "react";
import styles from "./Banner.module.scss";
import restaurants from "../../data";

function Banner(props) {
  return (
    <div className={styles.banner}>
      <h2 className={styles.banner__title}> Order From</h2>
      <h3 className={styles.banner__text}>From {restaurants.length} Restaraunts </h3>
    </div>
  );
}
export default Banner;
