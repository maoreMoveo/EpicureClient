import { configureStore,combineReducers } from "@reduxjs/toolkit";
import dishesReducer from "./dishes/dishesSlice";
import restaurantReducer from "./restaurant/restaurantSlice";
import chefReducer from './chef/chefSlice';
const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  dishes: dishesReducer,
  chefs: chefReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch= typeof store.dispatch;