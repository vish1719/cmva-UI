import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  // Get the token from localStorage
  const token = localStorage.getItem('blogAuthToken');
  
  // Use "Token" prefix for DRF TokenAuthentication
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  // Clean up leading slashes in URL if needed
  if (config.url.startsWith('//')) {
    config.url = config.url.replace(/^\/+/, '/');
  }

  return config;
});

export { API_BASE_URL };
export default api;
