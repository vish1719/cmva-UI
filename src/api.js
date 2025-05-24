import axios from 'axios';

// Use environment variable for API base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add authentication token to every request if logged in
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('blogAuthToken');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  // Ensure the URL doesn't result in double slashes
  if (config.url.startsWith('//')) {
    config.url = config.url.replace(/^\/+/, '/');
  }

  return config;
});

export { API_BASE_URL }; // 👈 Add this line
export default api;
