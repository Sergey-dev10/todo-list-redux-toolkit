import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action) {
      state.text = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export const selectSearchedText = ({ search }) => search.text;

export default searchSlice.reducer;
