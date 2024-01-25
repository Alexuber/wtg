import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async newTask => {
  const response = await api.post('/tasks', newTask);
  return response.data;
};

export const updateTask = async (taskId, updatedTask) => {
  const response = await api.put(`/tasks/${taskId}`, updatedTask);
  return response.data;
};

export const deleteTask = async taskId => {
  const response = await api.delete(`/tasks/${taskId}`);
  return response.data;
};
