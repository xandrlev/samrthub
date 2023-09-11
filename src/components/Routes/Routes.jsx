import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { SingleProduct } from "../Products/SingleProduct";
import { ROUTES } from "../../utils/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};
