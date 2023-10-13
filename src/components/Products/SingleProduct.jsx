import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../redux/products/productsSlice";
import { ROUTES } from "../../utils/routes";
import { Product } from "./Product";
import { Products } from "./Products";

export const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { related, list } = useSelector(({ products }) => products);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess, navigate]);

  useEffect(() => {
    if (!data || !list.length) return;
    dispatch(getRelatedProducts(data.category.id));
  }, [data, list.length, dispatch]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
};
