import {combineReducers} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";

export const rootReducer = combineReducers({
    todo: todoReducer,
});