import axios from "axios";

export const api = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default api;