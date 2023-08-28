import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={ROUTES.CATEGORY+`/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a href="/terms" target="_blank" className={styles.link}>
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};
