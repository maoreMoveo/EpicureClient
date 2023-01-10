import { createAsyncThunk } from "@reduxjs/toolkit";
import restaurantService from "../../services/restaurantService";
export const getRestaurantsPerPageWithFilter = createAsyncThunk(
  "restaurant/getRestaurantsPerPageWithFilter",
  async ({typeFilter,page,perPage}:{typeFilter:string,page:number,perPage:number}) => {
    const res = await restaurantService.getAllRestaraunt(typeFilter,page, perPage);
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

