import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task/Task";
import { addTask, ChangeTaskText } from "../../Redux/TodoListReducer";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(ChangeTaskText(e.target.value));
  };

  const onClickHandler = () => {
    dispatch(addTask());
  };

  return (
    <div className="TodoList">
      <div className="inputPanel">
        <input type="text" onChange={(e) => onChangeHandler(e)} />
        <button onClick={onClickHandler}>Add task</button>
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
