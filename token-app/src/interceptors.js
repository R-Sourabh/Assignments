import { createApp } from 'vue';
import axios from 'axios';

createApp.config.globalProperties.$axios = axios;

axios.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
