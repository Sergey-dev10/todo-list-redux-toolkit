import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  action: "add",
};

const toggleButtonsSlice = createSlice({
  name: "toggleButtons",
  initialState,
  reducers: {
    toggleButtons(state, action) {
      state.action = action.payload;
    },
  },
});

export const { toggleButtons } = toggleButtonsSlice.actions;

export const selectAction = ({ toggleButtons }) => toggleButtons.action;
export default toggleButtonsSlice.reducer;
