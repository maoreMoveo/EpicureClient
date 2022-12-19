import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { getAllRestaurants } from "./store/restaurant/restaurantAction";
import { getAllDishes } from "./store/dishes/dishesAction";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllRestaurants());
    dispatch(getAllDishes());
  }, [dispatch]);
  
 
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
