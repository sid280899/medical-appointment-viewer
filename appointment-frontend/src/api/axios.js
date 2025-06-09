import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust if using a different port or path
});
