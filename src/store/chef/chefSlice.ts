import { createSlice } from "@reduxjs/toolkit";
import IChef from "../../interfaces/chef";
import { getChefsWithPagination, getChefOFWeek } from "./chefAction";
import IRestaurant from "../../interfaces/Restaurant";
interface ChefsState {
  chefs: IChef[] | null;
  chefsCount: number;
  chefOfWeek: { chef: IChef; restaurantChef: IRestaurant[] } | null;
  loading: boolean;
}
const initialState = {
  chefs: null,
  chefOfWeek: null,
  chefsCount: 0,
  loading: false,
} as ChefsState;

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChefsWithPagination.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getChefsWithPagination.fulfilled, (state, action) => {
      state.chefsCount = action.payload.chefsCount;
      state.chefs = action.payload.chefs;
      state.loading = false;
    });
    builder.addCase(getChefOFWeek.fulfilled, (state, action) => {
      state.chefOfWeek = action.payload;
    });
  },
});

export const chefActions = chefSlice.actions;
export default chefSlice.reducer;
