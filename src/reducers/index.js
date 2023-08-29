import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import toggleButtonsReducer from "./toggleButtonsSlice.js";
import filterReducer from "./filterSlice.js";
import searchReducer from "./searchSlice.js";
export const rootReducer = combineReducers({
  todo: todoReducer,
  toggleButtons: toggleButtonsReducer,
  filter: filterReducer,
  search: searchReducer,
});
