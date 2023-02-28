import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cartSlice;

export const selectCartItemById = (state: RootState, id: string) => state.cartSlice.items.find((obj) => obj.id === id);
