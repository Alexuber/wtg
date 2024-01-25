import React, { useState } from 'react';
import styles from './TaskList.module.scss';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  const [editedTask, setEditedTask] = useState({
    id: null,
    title: '',
    status: '',
    deadline: '',
  });

  const handleEdit = task => {
    setEditedTask(task);
  };

  const handleSave = () => {
    editTask(editedTask.id, editedTask);
    setEditedTask({ id: null, title: '', status: '', deadline: '' });
  };

  const handleCancel = () => {
    setEditedTask({ id: null, title: '', status: '', deadline: '' });
  };

  return (
    <div className={styles.taskList}>
      <h2>Список завдань</h2>
      <div className={styles.taskListHeader}>
        <span>Завдання</span>
        <span>Статус</span>
        <span>Дедлайн</span>
        <span>Опції</span>
      </div>
      {tasks.map(task => (
        <div key={task.id}>
          {task.id === editedTask.id ? (
            <>
              <input
                type="text"
                placeholder="Назва завдання"
                value={editedTask.title}
                onChange={e =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
              />
              <select
                value={editedTask.status}
                onChange={e =>
                  setEditedTask({ ...editedTask, status: e.target.value })
                }
              >
                <option value="Виконується">Виконується</option>
                <option value="На черзі">На черзі</option>
                <option value="Виконано">Виконано</option>
              </select>
              <input
                type="date"
                placeholder="Дедлайн"
                value={editedTask.deadline}
                onChange={e =>
                  setEditedTask({ ...editedTask, deadline: e.target.value })
                }
              />
              <button onClick={handleSave}>Зберегти</button>
              <button onClick={handleCancel}>Відмінити</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <span>{task.status}</span>
              <span>{task.deadline}</span>
              <button onClick={() => handleEdit(task)}>Редагувати</button>
              <button onClick={() => deleteTask(task.id)}>Видалити</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
