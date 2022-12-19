import { createAsyncThunk } from "@reduxjs/toolkit";
import dishService from '../../services/dishService';
export const getAllDishes = createAsyncThunk(
    "dishes/getAllDishes",
    async () => {
      const res = await dishService.getAll();
      return res;
    }
  );