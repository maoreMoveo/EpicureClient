import { createSlice} from "@reduxjs/toolkit";
import IChef from "../../interfaces/chef";
import { getAllChefs, getChefOFWeek } from "./chefAction";
interface ChefsState {
  chefs: IChef[] | null;
  chefOfWeek:any
}
const initialState = { 
  chefs: null ,
  chefOfWeek:null
} as ChefsState;

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(getAllChefs.fulfilled, (state, action) => {
      state.chefs= action.payload;
    });
    builder.addCase(getChefOFWeek.fulfilled, (state, action) => {
      console.log('chef slice')
      console.log(action.payload)
      state.chefOfWeek= action.payload;
    });
  },
});

export const chefActions = chefSlice.actions;
export default chefSlice.reducer;
