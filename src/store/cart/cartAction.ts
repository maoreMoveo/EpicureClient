import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import IDish from '../../interfaces/Dishes';

interface CartItem{
    dish:IDish;
}

interface CartState {
  items: CartItem[];
  isOrder:boolean;
}

const initialState = { items: [] ,isOrder:false} as CartState;



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem(state, action: PayloadAction< CartItem>) {
        state.items.push(action.payload);
      },
      removeItem(state, action: PayloadAction< CartItem>) {
        state.items = state.items.filter(item => item.dish._id !== action.payload.dish._id);
      },
    },
  });
  
  export const { addItem, removeItem } = cartSlice.actions;
  
  export default cartSlice.reducer;