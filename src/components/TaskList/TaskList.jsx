import { Task } from "../Task";
import { NoTasksMessage } from "../NoTasksMessage";

export const TaskList = ({tasks}) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => {
          const { id, title, completed } = task;
          return (
            <Task
              key={id}
              id={id}
              title={title}
              completed={completed}
            />
          );
        })
      ) : (
        <NoTasksMessage />
      )}
    </div>
  );
};