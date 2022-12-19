import { createSlice} from "@reduxjs/toolkit";
import IDish from '../../interfaces/Dishes';
import { getAllDishes } from "./dishesAction";
interface DishesState {
  dishes: IDish[] | null;
}
const initialState = { dishes: null } as DishesState;

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(getAllDishes.fulfilled, (state, action) => {
      state.dishes= action.payload;
    });
  },
});

export const dishesActions = dishesSlice.actions;
export default dishesSlice.reducer;
