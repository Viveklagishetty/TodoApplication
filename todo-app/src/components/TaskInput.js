import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TaskInput.css';

const TaskInput = () => {
  // Use the useState hook to create a state variable for the task text
  // and a function to update the state
  const [taskText, setTaskText] = useState('');

  // Use the useDispatch hook to get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

// Function to handle adding a new task
  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(),
          text: taskText,
        },
      });
      // Clear the taskText state after adding the task 
      setTaskText('');
    }
  };

  return (
    <div className="task-input-container">
        {/* Input field for entering the task text */}
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        className="task-input"
        placeholder="Enter task..."
      />
      {/* Button to add the task */}
      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;