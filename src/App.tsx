import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import {getPopularRestaurant } from "./store/restaurant/restaurantAction";
import { getDishesHomePage } from "./store/dishes/dishesAction";
import { getChefOFWeek } from "./store/chef/chefAction";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPopularRestaurant());
    dispatch(getDishesHomePage());
    dispatch(getChefOFWeek());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
