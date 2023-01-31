import { createAsyncThunk } from "@reduxjs/toolkit";
import dishService from '../../services/dishService';
export const getDishesHomePage = createAsyncThunk(
    "dishes/getAllDishes",
    async () => {
      const res = await dishService.getDishesHomePage();
      return res;
    }
  
  );