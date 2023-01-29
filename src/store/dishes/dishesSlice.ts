import { createSlice} from "@reduxjs/toolkit";
import IDish from '../../interfaces/Dishes';
import { getDishesHomePage } from "./dishesAction";
interface DishesState {
  dishes: IDish[] | null;
}
const initialState = { dishes: null} as DishesState;

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(getDishesHomePage.fulfilled, (state, action) => {
      state.dishes= action.payload.dishes;
    });
  },
});

export const dishesActions = dishesSlice.actions;
export default dishesSlice.reducer;
