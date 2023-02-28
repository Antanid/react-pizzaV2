import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { PizzaStateType, Status } from "./types";

const initialState: PizzaStateType = {
  items: [],
  status: Status.LOADING
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.items = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
