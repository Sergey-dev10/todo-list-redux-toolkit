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
    const handledTitle = title.trim();
    if (handledTitle) {
      const task = {
        id: nanoid(),
        title: handledTitle,
        completed: false,
        edited: false,
      };
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
