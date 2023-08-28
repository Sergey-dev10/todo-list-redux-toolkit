import { useState } from "react";
import { useDispatch } from "react-redux";
import { TaskEditor } from "../TaskEditor";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  TaskWrapper,
  TaskItem,
  Button,
  ButtonsWrapper,
  Title,
} from "./Task.styles.js";
import { completeTask, removeTask } from "../../reducers/todoSlice.js";
export const Task = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleRemoveTask = () => {
    dispatch(removeTask(id));
  };

  const handleEditBtn = () => {
    setIsEdit(true);
  };

  const handleTaskCompletion = (e) => {
    setIsCompleted(e.target.checked);
    dispatch(completeTask(id));
  };

  return (
    <TaskWrapper>
      {isEdit ? (
        <TaskEditor
          title={title}
        />
      ) : (
        <TaskItem>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleTaskCompletion}
          />
          <Title $isCompleted={isCompleted}>{title}</Title>
          <ButtonsWrapper>
            <Button onClick={handleEditBtn}>
              <FaEdit />
            </Button>
            <Button onClick={handleRemoveTask}>
              <AiFillDelete />
            </Button>
          </ButtonsWrapper>
        </TaskItem>
      )}
    </TaskWrapper>
  );
};
