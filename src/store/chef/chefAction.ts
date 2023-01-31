import { createAsyncThunk } from "@reduxjs/toolkit";
import chefService from "../../services/chefService";

export const getChefsWithPagination = createAsyncThunk(
    "chef/getChefsWithPagination",
    async ({typeFilter,page,perPage}:{typeFilter:string,page:number,perPage:number}) => {
      const res = await chefService.getChefsWithPagination(typeFilter,page,perPage);
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
  