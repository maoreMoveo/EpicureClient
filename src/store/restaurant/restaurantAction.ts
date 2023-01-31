import { createAsyncThunk } from "@reduxjs/toolkit";
import restaurantService from "../../services/restaurantService";
import { MealOption } from "../../interfaces/Dishes";
export const getRestaurantsPerPageWithFilter = createAsyncThunk(
  "restaurant/getRestaurantsPerPageWithFilter",
  async ({
    typeFilter,
    page,
    perPage,
  }: {
    typeFilter: string;
    page: number;
    perPage: number;
  }) => {
    const res = await restaurantService.getAllRestaraunt(
      typeFilter,
      page,
      perPage
    );
    return res;
  }
);
export const getRestaurantDishes = createAsyncThunk(
  "restaurant/getRestaurantDishes",
  async (
    { id, page, perPage,filterByMeal }: { id: string; page: number; perPage: number,filterByMeal:MealOption },
    thunkApi
  ) => {
    const res = await restaurantService.getRestaurantDishes(id, page, perPage,filterByMeal);
  

    return res;
  }
);
export const getPopularRestaurant = createAsyncThunk(
  "restaurant/getPopularRestaurant",
  async () => {
    const res = await restaurantService.getPopularRestaraunt();
    return res;
  }
);
export const getById = createAsyncThunk(
  "restaurant/getById",
  async (id: string) => {
    const res = await restaurantService.getRestarauntById(id);
    return res;
  }
);
