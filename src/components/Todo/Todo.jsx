import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../Title";
import { TaskAdder } from "../TaskAdder";
import { TaskList } from "../TaskList";
import { ActionPanel } from "../ActionPanel";
import { Search } from "../Search";
import { TodoWrapper } from "./Todo.styles.js";
import { selectTasks, updateTasks} from "../../reducers/todoSlice.js";

export const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [filter, setFilter] = useState("All");
  const [action, setAction] = useState("add");
  const [searchText, setSearchText] = useState("");

  let handledTasks = [];
  if (filter === "All") {
    handledTasks = tasks;
  } else if (filter === "Active") {
    handledTasks = tasks.filter((task) => task.completed === false);
  } else if (filter === "Completed") {
    handledTasks = tasks.filter((task) => task.completed === true);
  }

  if (searchText) {
    handledTasks = handledTasks.filter(
      (task) => task.title.indexOf(searchText) !== -1,
    );
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch(updateTasks(JSON.parse(storedTasks)));
    }
  }, []);

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <TodoWrapper>
      <Title />
      {action === "add" ? <TaskAdder /> : <Search />}

      <TaskList tasks={handledTasks} />
      <ActionPanel tasks={tasks} />
    </TodoWrapper>
  );
};
