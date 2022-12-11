import * as React from "react";
import Restaurants from "./componets/Restaurants/Restaurants";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./componets/Restaurants/RestaurantPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NavBar from "./componets/navbar/NavBar";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<HomePage />} />
        <Route path="restaurant" element={<Restaurants />}></Route>
        <Route path="restaurant/:restaurantId" element={<RestaurantPage />} />

        {/* to check with amir */}
        
        {/* <Route path="restaurant" element={<Restaurants />}>
        <Route path=":restaurantId" element={<RestaurantPage />} />
        </Route> */}
    </>
  )
);
