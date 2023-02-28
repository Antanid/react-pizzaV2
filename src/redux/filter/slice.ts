import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterTypeState, SortTypeState } from "./types";

const initialState: filterTypeState = {
  searchValue: '',
  paginationNumber: 1,
  categoryIndex: 0,
  sort: {
    sortName: "-price",
    sortIndex: 0
  } 
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIndex: (state, action: PayloadAction<number>) => {
      state.categoryIndex = action.payload;
    },
    setSearchValue : (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSortName: (state, action: PayloadAction<SortTypeState["sortName"]>) => {
        state.sort.sortName = action.payload
    },
    setSortIndex: (state, index: PayloadAction<number>) => { 
        state.sort.sortIndex = index.payload
    },
    setPaginationPage: (state, number: PayloadAction<number>) => {
      state.paginationNumber = number.payload
  },
  setUrlFilters: (state, action: PayloadAction<filterTypeState & SortTypeState>) => {
    state.paginationNumber = action.payload.paginationNumber;
    state.categoryIndex = action.payload.categoryIndex;
    state.sort.sortIndex = action.payload.sortIndex;
    state.sort.sortName = action.payload.sortName;
  }
  },
});

export const { setCategoryIndex, setSortName, setSortIndex, setPaginationPage, setUrlFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;