import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

/* This component wraps the App component with the Redux Provider 
to make the Redux store available to the entire application */
const AppWithProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  // Use the useSelector hook to get the tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);

  // Function to save the tasks to local storage
  const handleSaveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Simple React To-Do App</h1>
      <TaskInput />
      <TaskList />
      <div className="button-container">
        <button onClick={handleSaveTasks} className="save-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default AppWithProvider;