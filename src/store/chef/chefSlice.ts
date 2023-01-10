import { createSlice} from "@reduxjs/toolkit";
import IChef from "../../interfaces/chef";
import { getChefsWithPagination, getChefOFWeek } from "./chefAction";
interface ChefsState {
  chefs: IChef[] | null;
  chefsCount:number
  chefOfWeek:any
}
const initialState = { 
  chefs: null ,
  chefOfWeek:null,
  chefsCount:0
} as ChefsState;

const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {} ,
  extraReducers: (builder) => {
    builder.addCase(getChefsWithPagination.fulfilled, (state, action) => {
      state.chefsCount=action.payload.chefsCount;
      state.chefs= action.payload.chefs;
    });
    builder.addCase(getChefOFWeek.fulfilled, (state, action) => {
      state.chefOfWeek= action.payload;
    });
  },
});

export const chefActions = chefSlice.actions;
export default chefSlice.reducer;
