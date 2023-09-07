import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Cart.module.css";
import { sum } from "../../utils/common";
import {
  addProductToCart,
  removeItemFromCart,
} from "../../redux/api/user/userSlice";

export const Cart = () => {
  const { cart } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const changeQuantity = (item, quantity) => {
    dispatch(addProductToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>
      {!cart.length ? (
        <div className={styles.empty}>Cart is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, category, images, id, quantity, price } = item;
              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className={styles.icon}>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg>
                    </div>
                    <span>{quantity}</span>
                    <div
                      className={styles.plus}
                      onClick={() => changeQuantity(item, quantity + 1)}
                    >
                      <svg className={styles.icon}>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.total}>{price * quantity}$</div>
                  <div className={styles.close} onClick={() => removeItem(id)}>
                    <svg className={styles.icon}>
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.actions}>
            <div className={styles.total}>
              Total price:{" "}
              <span>
                {sum(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>
            <button className={styles.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};
