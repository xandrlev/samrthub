import React from "react";
import styles from "../../styles/Categories.module.css";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

export const Categories = ({ title, amount, products = [] }) => {
  const list = products.filter((_, index) => index < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, image, name }) => (
          <Link
            key={id}
            to={ROUTES.CATEGORY + `/${id}`}
            className={styles.item}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={styles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
