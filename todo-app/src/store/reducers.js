// Import the action types from the actions file
import { ADD_TASK, DELETE_TASK } from './actions';

// The initial state includes the tasks retrieved from local storage
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// The reducer takes the current state and an action as arguments
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedAddTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedAddTasks));
      return {
        ...state,
        tasks: updatedAddTasks,
      };
    case DELETE_TASK:
      const updatedDeleteTasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedDeleteTasks));
      return {
        ...state,
        tasks: updatedDeleteTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
