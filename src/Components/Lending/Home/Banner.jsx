import React from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <>
      <div className={styles.maininnear}>
        <img src="/images/banner.png" alt="nhbbb" />
        <div className={styles.hoverdiv}>
          <h1 className={styles.maindtext}>deposit $ get</h1>
          <h1 className={styles.gettext}>100% up to &100</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
