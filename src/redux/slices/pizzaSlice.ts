import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

// type FetchType = Record<string, string>

 type FetchType = {
  IndexCategory: string;
  sortNameRep: string;
  sortType: string;
  search: string;
  pagePagination: number;
}

export const fetchPizzas = createAsyncThunk("pizzaSlice/fetchPizzasStatus ", async (params: FetchType) => {
  const { IndexCategory, sortNameRep, sortType, search, pagePagination } = params;
  const pizzaArr = await axios.get<PizzaType[]>(
    `https:63dc22b6b8e69785e49282a5.mockapi.io/pizza?page=${pagePagination}
                 &limit=4&${IndexCategory}&sortBy=${sortNameRep}&order=${sortType}&${search}`
  );
  return pizzaArr.data as PizzaType[];
});

export enum Status {
LOADING = "loading",
SUCCESS = "success",
ERROR = "error"
};

type PizzaType = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

interface PizzaStateType {
  items: PizzaType[];
  status: Status
}

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

export const SelecyPizzaSlice = (state: RootState) => state.pizzaSlice;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
