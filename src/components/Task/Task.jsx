import React, { useState } from 'react';
import styles from './Task.module.scss';

const Task = ({ task, editTask, deleteTask }) => {
  const [status, setStatus] = useState(task.status || 'Виконується');

  const handleStatusChange = e => {
    setStatus(e.target.value);
    editTask(task.id, { status: e.target.value });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={styles.task}>
      <span>{task.title}</span>
      <select value={status} onChange={handleStatusChange}>
        <option value="Виконується">Виконується</option>
        <option value="На черзі">На черзі</option>
        <option value="Виконано">Виконано</option>
      </select>
      <span>{task.deadline}</span>
      <button onClick={handleDelete}>Видалити</button>
    </div>
  );
};

export default Task;
