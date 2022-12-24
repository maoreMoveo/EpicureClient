import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import ICart from '../../interfaces/cart';
import IDish from '../../interfaces/Dishes';


interface CartState {
  items: ICart[];
  isOrder:boolean;
}

const initialState = { items: [] ,isOrder:false} as CartState;



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem(state, action: PayloadAction< ICart>) {
        state.items.push(action.payload);
      },
    //   removeItem(state, action: PayloadAction< ICart>) {
    //     state.items = state.items.filter(item => item.dish._id !== action.payload.dish._id);
    //   },
    },
  });
  
  export const { addItem } = cartSlice.actions;
  
  export default cartSlice.reducer;