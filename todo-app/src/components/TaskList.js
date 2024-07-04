// TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  const handleDelete = (taskId) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: taskId,
    });
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setEditedTaskText(task.text);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        id: editingTask.id,
        text: editedTaskText,
      },
    });
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditedTaskText('');
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {editingTask && editingTask.id === task.id ? (
            <div className="edit-task-popup">
              <input
                type="text"
                value={editedTaskText}
                onChange={(e) => setEditedTaskText(e.target.value)}
                className="edit-task-input"
              />
              <div className="edit-task-buttons">
                <button onClick={handleSaveEdit} className="save-edit-button">
                  Save
                </button>
                <button onClick={handleCancelEdit} className="cancel-edit-button">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <span className="task-text">{task.text}</span>
              <div className="task-buttons">
                <button onClick={() => handleEdit(task)} className="edit-task-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(task.id)} className="delete-task-button">
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;