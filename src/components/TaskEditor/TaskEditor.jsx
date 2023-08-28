import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSave } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";
import {
  TaskEditorWrapper,
  Button,
  Input,
  ButtonsWrapper,
} from "./TaskEditor.styles.js";
import { editTask } from "../../reducers/todoSlice.js";

export const TaskEditor = ({ id, title }) => {
  const dispatch = useDispatch();
  const [newTitle, steNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    steNewTitle(e.target.value);
  };
  const handleSaveNewTitle = () => {
    let title = newTitle.trim();
    if (title) {
      steNewTitle(title);
      dispatch(editTask({ id, title, edited: false }));
    }
  };

  const handleReturnBack = () => {
    dispatch(editTask({ id, title, edited: false }));
  };
  return (
    <TaskEditorWrapper>
      <Input type="text" value={newTitle} onChange={handleTitleChange} />
      <ButtonsWrapper>
        <Button onClick={handleSaveNewTitle}>
          <FaSave />
        </Button>
        <Button onClick={handleReturnBack}>
          <PiKeyReturnFill />
        </Button>
      </ButtonsWrapper>
    </TaskEditorWrapper>
  );
};
