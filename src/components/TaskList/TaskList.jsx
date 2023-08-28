import { Task } from "../Task";
import { NoTasksMessage } from "../NoTasksMessage";

export const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => {
          const { id, title, completed } = task;
          return <Task key={id} {...task} />;
        })
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};
