import { createSlice } from "@reduxjs/toolkit";

import IRestaurant from "../../interfaces/Restaurant";
import { getRestaurantsPerPageWithFilter, getPopularRestaurant } from "./restaurantAction";
interface RestaurantState {
  restaurants: IRestaurant[] | null;
  restaurantCount:number
  popularRestaurant: IRestaurant[] | null;
}
const initialState = {
  restaurants: null,
  popularRestaurant : null,
  restaurantCount:0
} as RestaurantState;

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurantsPerPageWithFilter.fulfilled, (state, action) => {
      console.log(action.payload);
      state.restaurantCount=action.payload.restaurantCount
      state.restaurants = action.payload.restaurants;
    });
    builder.addCase(getPopularRestaurant.fulfilled, (state, action) => {
      console.log('slice')
      console.log(action.payload.restaurants);
      state.popularRestaurant = action.payload.restaurants;
      ;
    });
  },
});

export const restaurantActions = restaurantSlice.actions;
export default restaurantSlice.reducer;
