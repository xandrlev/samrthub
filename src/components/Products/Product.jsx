import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../redux/api/user/userSlice";
import styles from "../../styles/Product.module.css";

const sizes = ["XS", "S", "M", "L", "XL"];

export const Product = (item) => {
  const { images, title, price, description } = item;
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addCart = () => {
    dispatch(addProductToCart(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {sizes.map((size) => (
              <div
                key={size}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                onClick={() => setCurrentSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            onClick={addCart}
            className={styles.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>
            {~~(Math.random() * 20 + 1)} people purchased
          </div>
          <Link to={ROUTES.HOME}>return to store</Link>
        </div>
      </div>
    </section>
  );
};
