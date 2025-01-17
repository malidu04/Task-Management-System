import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user?.token) {
        req.headers.Authorization = `Bearer ${user.token}`;
    }
    return req;
});

export const login = (data) => API.post('/users/login', data);
export const register = (data) => API.post('/users/register', data);

export const fetchTasks = () => API.get('/tasks');
export const createTask = (data) => API.post('/tasks', data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`); 