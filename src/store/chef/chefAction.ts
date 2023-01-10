import { createAsyncThunk } from "@reduxjs/toolkit";
import chefService from "../../services/chefService";

export const getAllChefs = createAsyncThunk(
    "chef/getAllChefs",
    async () => {
      const res = await chefService.getAllChefs();
      return res;
    }
  );
  export const getChefOFWeek = createAsyncThunk(
    "chef/getChefOFWeek",
    async () => {
      const res = await chefService.getChefOfWeek();
      return res;
    }
  );
  