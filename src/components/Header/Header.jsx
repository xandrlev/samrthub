import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../redux/api/user/userSlice";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import { BsCart, BsBookmark, BsSearch } from "react-icons/bs";
import Avatar from "../../images/avatar.svg";
import Logo from "../../images/logo.png";
import styles from "../../styles/Header.module.css";

export const Header = () => {
  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });
  const [searchValue, setSearchValue] = useState("");
  const { currentUser, cart } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    } else {
      navigate(ROUTES.PROFILE);
    }
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
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
            <BsSearch />
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name=" search "
              placeholder="Search product"
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No result"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <BsBookmark className={styles["icon-cart"]} />
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <BsCart className={styles["icon-cart"]} />
            {!!cart.length && (
              <span className={styles.count}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
