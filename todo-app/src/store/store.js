// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, text: action.payload.text } : task
    ),
  };
    default:
      return state;
  }
};

// Create the store
const store = createStore(taskReducer);

export default store;