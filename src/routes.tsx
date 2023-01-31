import * as React from "react";
import Restaurants from "./pages/Restaurants";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Chefs from "./pages/Chefs";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="restaurants" element={<Restaurants />}></Route>
        <Route path="restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="chefs" element={<Chefs />} />
        <Route path="*" element={<HomePage />} />
      </Route>

    </>
  )
);
