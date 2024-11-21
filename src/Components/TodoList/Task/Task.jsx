import { useDispatch } from "react-redux";
import "./Task.css";
import { completedTask, removeTask } from "../../../Redux/TodoListReducer";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const onCompletedTask = () => {
    dispatch(completedTask(task.id));
  };

  const onRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className={task.completed ? "TaskCompleted" : "Task"}>
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onChange={onCompletedTask}
      />
      <p>{task.text}</p>
      <button onClick={onRemoveTask}>Remove</button>
    </div>
  );
};

export default Task;
