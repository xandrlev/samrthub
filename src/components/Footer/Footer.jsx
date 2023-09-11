import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Logo from "../../images/logo.png";
import styles from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link className={styles.logo_icon} to={ROUTES.HOME}>
          <img src={Logo} alt="SMARTHUB" />
          <div className={styles.logo_text}>
            <span>SMART</span>
            <span>HUB</span>
          </div>
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a href="https://github.com/xandrlev/" target="_blank" rel="noreferrer">
          Alex Kovalev
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube `} />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook `} />
          </svg>
        </a>
      </div>
    </section>
  );
};
