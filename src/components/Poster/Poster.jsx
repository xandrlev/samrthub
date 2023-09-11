import React from "react";
import iphone from "../../images/iphone15.png";
import styles from "../../styles/Home.module.css";

export const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 50%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the best seller of 2023</div>
          <h1 className={styles.head}>iphone 15 pro</h1>
          <button className={styles.button}>ORDER</button>
        </div>
        <div className={styles.image}>
          <img src={iphone} alt="iphone" />
        </div>
      </div>
    </section>
  );
};
