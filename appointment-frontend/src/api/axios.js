// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://appointment-backend-n3zk.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
