import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    completeTask(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );
    },
    editTask(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.title,
              edited: action.payload.edited,
            }
          : task,
      );
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, completeTask, editTask, removeTask, updateTasks } =
  todoSlice.actions;
export const selectTasks = ({ todo }) => todo.tasks;
export default todoSlice.reducer;
