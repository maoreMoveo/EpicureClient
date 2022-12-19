import { createAsyncThunk } from "@reduxjs/toolkit";
import chefService from "../../services/chefService";

export const getAllChefs = createAsyncThunk(
    "chef/getAllChefs",
    async () => {
      const res = await chefService.getAll();
      return res;
    }
  );
  