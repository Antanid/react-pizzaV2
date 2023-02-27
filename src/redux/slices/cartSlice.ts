import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItemType = {
  id: string;
  imageUrl: string;
  price: number;
  sizes: number;
  title: string;
  types: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
};

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

console.log(initialState.items)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItemType>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems) {
        findItems.count--;
      }
    },
    removeProduct(state, action:  PayloadAction<string> ) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0
    },
  },
});

export const selectCart = (state: RootState) => state.cartSlice;

export const selectCartItemById = (state: RootState, id: string) => state.cartSlice.items.find((obj) => obj.id === id);


export const { addProduct, removeProduct, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
