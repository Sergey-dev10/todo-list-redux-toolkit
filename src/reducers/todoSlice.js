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
      state.tasks = state.tasks.filter((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );
    },
    editTask(state, action) {
      state.tasks = state.tasks.filter((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task,
      );
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, completeTask, editTask, removeTask } =
  todoSlice.actions;
export const selectTasks = ({ todo }) => todo.tasks;
export default todoSlice.reducer;
