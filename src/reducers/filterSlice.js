import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = ({filter}) => filter.type;

export default filterSlice.reducer;


