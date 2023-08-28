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
import { completeTask, removeTask, editTask } from "../../reducers/todoSlice.js";
export const Task = ({ id, title, completed, edited }) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleRemoveTask = () => {
    dispatch(removeTask(id));
  };

  const handleEditBtn = () => {
    dispatch(editTask(({id, title, edited: true})))
  };

  const handleTaskCompletion = (e) => {
    setIsCompleted(e.target.checked);
    dispatch(completeTask(id));
  };

  return (
    <TaskWrapper>
      {edited ? (
        <TaskEditor
          id={id}
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
