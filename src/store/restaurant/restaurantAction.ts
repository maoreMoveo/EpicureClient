import { createAsyncThunk } from "@reduxjs/toolkit";
import restaurantService from "../../services/restaurantService";

export const getAllRestaurants = createAsyncThunk(
    "restaurant/getAllRestaurants",
    async () => {
      const res = await restaurantService.getAll();
      return res;
    }
  );
  