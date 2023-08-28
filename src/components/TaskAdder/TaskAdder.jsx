import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormWrapper, InputWrapper } from "./TaskAdder.styles.js";
import { nanoid } from "nanoid";
import { addTask } from "../../reducers/todoSlice.js";
export const TaskAdder = ({ onAddTask }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const task = { id: nanoid(), title: title, completed: false };
      dispatch(addTask(task));
    }
    setTitle("");
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper
        type="text"
        placeholder="Add new task"
        value={title}
        onChange={handleInputChange}
      />
    </FormWrapper>
  );
};
