import React, { useState, useEffect } from 'react';
import TaskList from './TaskList/TaskList';
import TaskForm from './TaskForm/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const createNewTask = async newTask => {
    const createdTask = await createTask(newTask);
    setTasks(prevTasks => [...prevTasks, createdTask]);
  };

  const editTask = async (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    await updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = async taskId => {
    await deleteTask(taskId);
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Менеджер завдань</h1>
      <TaskForm createNewTask={createNewTask} tasks={tasks} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
