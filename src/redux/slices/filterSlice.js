import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategoryIndex: (state, action) => {
      state.categoryIndex = action.payload;
    },
    setSearchValue : (state, action) => {
      state.searchValue = action.payload;
    },
    setSortName: (state, list) => {
        state.sort.sortName = list.payload
    },
    setSortIndex: (state, index) => {
        state.sort.sortIndex = index.payload
    },
    setPaginationPage: (state, number) => {
      state.paginationNumber = number.payload
  },
  setUrlFilters: (state, action) => {
    state.paginationNumber = action.payload.paginationNumber;
    state.categoryIndex = action.payload.categoryIndex;
    state.sort.sortIndex = action.payload.sortIndex;
    state.sort.sortName = action.payload.sortName;
  }
  },
});

export const selectFilter = (state) => state.filterSlice

export const { setCategoryIndex, setSortName, setSortIndex, setPaginationPage, setUrlFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;