import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import { Product } from "./Product";

export const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  return !data ? (
    <section>Loading...</section>
  ) : (
    <>
      <Product {...data} />
    </>
  );
};
