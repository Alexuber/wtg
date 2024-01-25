import React, { useState } from 'react';
import styles from './TaskForm.module.scss';

const TaskForm = ({ createNewTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      status: 'Виконується',
      deadline: taskDeadline,
    };

    createNewTask(newTask);
    setTaskTitle('');
    setTaskDeadline('');
  };

  return (
    <div className={styles.taskForm}>
      <h2>Створити завдання</h2>
      <form onSubmit={handleSubmit}>
        <h3>Опис</h3>
        <input
          type="text"
          placeholder="Назва завдання"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
        />

        <h3>Дедлайн виконання</h3>
        <input
          type="date"
          value={taskDeadline}
          onChange={e => setTaskDeadline(e.target.value)}
        />

        <button type="submit">Створити</button>
      </form>
    </div>
  );
};

export default TaskForm;
