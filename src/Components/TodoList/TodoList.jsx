import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task/Task";
import {
  addTask,
  ChangeTaskText,
  removeALLTask,
} from "../../Redux/TodoListReducer";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const taskText = useSelector((state) => state.taskText);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(ChangeTaskText(e.target.value));
  };

  const onClickHandler = () => {
    dispatch(addTask());
  };

  const onRemoveAllTasks = () => {
    dispatch(removeALLTask());
  };

  return (
    <div className="TodoList">
      <div className="inputPanel">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          value={taskText || ""}
        />
        <button onClick={onClickHandler}>Add task</button>
        <button onClick={onRemoveAllTasks}>Remove all task</button>
      </div>
      <div>
        {tasks.map((task, idx) => (
          <Task task={task} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
