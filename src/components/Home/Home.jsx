import React, { useEffect } from "react";
import { Poster } from "../Poster/Poster";
import { Products } from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { Categories } from "../Categories/Categories";
import { Banner } from "../Banner/Banner";
import { filterByPrice } from "../../redux/products/productsSlice";

export const Home = () => {
  const {
    products: { filtered, list },
    categories,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (list.length) {
      dispatch(filterByPrice(100));
    }
  }, [dispatch, list.length]);

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Categories" />
      <Banner />
      <Products products={filtered} amount={5} title="Less then 100$" />
    </>
  );
};
