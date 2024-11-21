const CHANGE_TASK_TEXT = "CHANGE_TASK_TEXT";
const ADD_TASK = "ADD_TASK";

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

export default TodoListReducer;
