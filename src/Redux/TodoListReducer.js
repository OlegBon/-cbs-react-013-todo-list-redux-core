const CHANGE_TASK_TEXT = "CHANGE_TASK_TEXT";
const ADD_TASK = "ADD_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const REMOVE_ALL_TASK = "REMOVE_ALL_TASK";

let initialState = {
  tasks: [
    { id: 1, text: "Complete daily workout", completed: true },
    { id: 2, text: "Read two chapters of a book", completed: false },
    { id: 3, text: "Update professional LinkedIn profile", completed: true },
    { id: 4, text: "Plan healthy meals for the week", completed: false },
  ],
  taskText: "",
};

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_TEXT:
      return {
        ...state,
        taskText: action.payload,
      };
    case ADD_TASK:
      // trim() для видалення зайвих пробілів на початку та наприкінці
      // Це дає змогу запобігти додаванню таски тільки з пробілів
      if (state.taskText.trim() === "") {
        return state;
      }
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: new Date(),
            text: state.taskText,
            completed: false,
          },
        ],
        taskText: "",
      };
    case COMPLETED_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case REMOVE_ALL_TASK:
      return {
        ...state,
        tasks: [],
      };
    default:
      return state;
  }
};

export const ChangeTaskText = (text) => {
  return {
    type: CHANGE_TASK_TEXT,
    payload: text,
  };
};

export const addTask = () => {
  return {
    type: ADD_TASK,
  };
};

export const completedTask = (id) => {
  return {
    type: COMPLETED_TASK,
    payload: id,
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};

export const removeALLTask = () => {
  return {
    type: REMOVE_ALL_TASK,
  };
};

export default TodoListReducer;
