import React from "react";
import styles from "../../styles/Products.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export const Products = ({ title, amount, style = {}, products = [] }) => {
  const list = products.filter((_, index) => index < amount);
  return (
    <section className={styles.products}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link
            key={id}
            to={ROUTES.PRODUCT + `${id}`}
            className={styles.product}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.cat}>{cat}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.oldPrice}>
                    {Math.floor(price * 1.3)}$
                  </div>
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)}purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
