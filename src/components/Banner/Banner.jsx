import React from "react";
import summer from '../../images/summer.jpg'
import styles from "../../styles/Home.module.css";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          SUMMER
          <span>SALE</span>
        </p>
        <button className={styles.more}>See more</button>
      </div>
      <div className={styles.right} style={{backgroundImage: `url(${summer})`, backgroundSize: 'cover'}}>
      <p className={styles.discount}></p>
      </div>
    </section>
  );
};
