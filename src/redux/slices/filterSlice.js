import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setSortName: (state, list) => {
        state.sort.sortName = list.payload
    },
    setSortIndex: (state, index) => {
        state.sort.sortIndex = index.payload
    },
    setPaginationPage: (state, number) => {
      state.paginationNumber = number.payload
  }
  },
});

export const { setCategoryIndex, setSortName, setSortIndex, setPaginationPage, setUrlFilters} = filterSlice.actions;

export default filterSlice.reducer;