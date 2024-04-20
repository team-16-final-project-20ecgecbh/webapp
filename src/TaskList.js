import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tasks/');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleToggleTask = async (id, isChecked) => {
    try {
      const response = await axios.put(`http://localhost:8000/tasks/${id}`);
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? { ...task, isChecked: !isChecked } : task
        )
      );
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isChecked}
              onChange={() => handleToggleTask(task.id, task.isChecked)}
            />
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
