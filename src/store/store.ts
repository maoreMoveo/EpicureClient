import { configureStore,combineReducers } from "@reduxjs/toolkit";
import dishesReducer from "./dishes/dishesSlice";
import restaurantReducer from "./restaurant/restaurantSlice";
import chefReducer from './chef/chefSlice';
import cartReducer from "./cart/cartSlice";
const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  dishes: dishesReducer,
  chefs: chefReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch= typeof store.dispatch;