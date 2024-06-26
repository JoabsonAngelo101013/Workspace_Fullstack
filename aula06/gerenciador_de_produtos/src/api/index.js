import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080/' // Ajuste conforme necessário, tambem é usada para configurar o base envairoment do insomnia
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token'); // Remove o token do localStorage
    // Redireciona para login
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default api;