import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Logo from "../../images/logo.png";
import Avatar from "../../images/avatar.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../redux/api/user/userSlice";

export const Header = () => {
  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });
  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.logo_icon} to={ROUTES.HOME}>
          <img src={Logo} alt="SMARTHUB" />
          <div className={styles.logo_text}>
            <span>SMART</span>
            <span>HUB</span>
          </div>
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name=" search "
              placeholder="Search product"
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>55</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
