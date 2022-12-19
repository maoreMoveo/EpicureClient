import { createSlice} from "@reduxjs/toolkit";

import IRestaurant from "../../interfaces/Restaurant";
import { getAllRestaurants } from "./restaurantAction";
interface RestaurantState {
  restaurants: IRestaurant[] | null;
}
const initialState = { restaurants: null } as RestaurantState;

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(getAllRestaurants.fulfilled, (state, action) => {
      state.restaurants= action.payload;
    });
  },
});

export const restaurantActions = restaurantSlice.actions;
export default restaurantSlice.reducer;
