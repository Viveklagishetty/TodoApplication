//Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

//Action creators
// Action creator for adding a task
export const addTask = (task) => ({
  type: ADD_TASK, // The type property specifies the action type
  payload: task, // The payload property contains the data associated with the action
});

// Action creator for deleting a task
export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});
