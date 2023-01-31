import { createSlice } from "@reduxjs/toolkit";

import IRestaurant from "../../interfaces/Restaurant";
import {
  getRestaurantsPerPageWithFilter,
  getPopularRestaurant,
  getRestaurantDishes,
  getById,
} from "./restaurantAction";
import IDish from "../../interfaces/Dishes";
type RestaurantPage = {
  restaurantId: string | null;
  restaurant: IRestaurant | undefined;
  restaurantDishes: IDish[] | null;
  restaurantDishesCount: number;
};
interface RestaurantState {
  restaurants: IRestaurant[] | null;
  restaurantCount: number;
  popularRestaurant: IRestaurant[] | null;
  loading: boolean;
  restaurantPage: RestaurantPage;
}
const initialState = {
  restaurants: null,
  popularRestaurant: null,
  restaurantCount: 0,
  loading: false,
  restaurantPage: {
    restaurantId: null,
    restaurantDishes: null,
    restaurantDishesCount: 0,
    restaurant: undefined,
  },
} as RestaurantState;

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getRestaurantsPerPageWithFilter.pending,
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getRestaurantsPerPageWithFilter.fulfilled,
      (state, action) => {
        state.restaurantCount = action.payload.restaurantCount;
        state.restaurants = action.payload.restaurants;
        state.loading = false;
      }
    );
    builder.addCase(getRestaurantDishes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRestaurantDishes.fulfilled, (state, action) => {
      console.log("🚀 ~ file: restaurantSlice.ts:59 ~ builder.addCase ~ action", action)
      state.restaurantPage.restaurantDishes = action.payload.restaurantDishes;
      state.restaurantPage.restaurantDishesCount = action.payload.restDishesCount;
      state.restaurantPage.restaurantId = action.payload.restaurantId;
      state.loading = false;
    });
    builder.addCase(getPopularRestaurant.fulfilled, (state, action) => {
      state.popularRestaurant = action.payload.restaurants;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.restaurantPage.restaurant = action.payload.restaurant;
    });
  },
});

export const restaurantActions = restaurantSlice.actions;
export default restaurantSlice.reducer;
