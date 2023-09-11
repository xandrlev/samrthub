import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { useSelector } from "react-redux";
import { Products } from "../Products/Products";
import styles from "../../styles/Category.module.css";

export const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const initialValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const initialParams = {
    ...initialValues,
    categoryId: id,
    limit: 5,
    offset: 0,
  };

  const [params, setParams] = useState(initialParams);
  const [values, setValues] = useState(initialValues);
  const [cat, setCat] = useState("");
  const [items, setItems] = useState([]);
  const [isEnd, setEnd] = useState(false);
  const { data, isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;
    setValues(initialValues);
    setItems([]);
    setEnd(false);
    setParams({ ...initialParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (!list.length || !id) return;
    const { name } = list.find((item) => item.id === +id);
    setCat(name);
  }, [list.length, id]);

  useEffect(() => {
    if (isLoading) return;
    if (!data.length) return setEnd(true);
    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...value, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([]);
    setEnd(false);
    setParams({ ...initialParams, ...values });
  };

  const handleParams = () => {
    setParams({ ...params, offset: params.offset + params.limit });
  };
  const handleReset = () => {
    setParams(initialParams);
    setValues(initialValues);
    setEnd(false);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{cat}</h2>
      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            value={values.title}
            placeholder="Product name"
            className={styles.wrapper}
            onChange={handleChange}
          />
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            value={values.title}
            placeholder="0"
            className={styles.wrapper}
            onChange={handleChange}
          />
          <span>From</span>
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            value={values.price_max}
            placeholder="0"
            className={styles.wrapper}
            onChange={handleChange}
          />
          <span>To</span>
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span className={styles.wrapper}>No result</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}
      <div className={styles.more}>
        {!isEnd && (
          <button className={styles.button} onClick={handleParams}>
            See more
          </button>
        )}
      </div>
    </section>
  );
};
