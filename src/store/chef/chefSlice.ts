import { createSlice} from "@reduxjs/toolkit";
import IChef from "../../interfaces/chef";
import { getAllChefs } from "./chefAction";
interface ChefsState {
  chefs: IChef[] | null;
}
const initialState = { chefs: null } as ChefsState;

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(getAllChefs.fulfilled, (state, action) => {
      state.chefs= action.payload;
    });
  },
});

export const chefActions = chefSlice.actions;
export default chefSlice.reducer;
