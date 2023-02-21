import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizzaSlice/fetchPizzasStatus ", async (params, thunkAPI) => {
  const { IndexCategory, sortNameRep, sortType, search, pagePagination } = params;
  const pizzaArr = await axios.get(
    `https:63dc22b6b8e69785e49282a5.mockapi.io/pizza?page=${pagePagination}
                 &limit=4&${IndexCategory}&sortBy=${sortNameRep}&order=${sortType}&${search}`
  );
return pizzaArr.data
});

const initialState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.items = actions.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
