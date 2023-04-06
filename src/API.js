import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://remontonlineback-production.up.railway.app/',
  baseURL: 'https://petly-site-back.up.railway.app/',
  // baseURL: 'http://localhost:8000',
  // baseURL: 'http://185.233.118.244:8000',
});

const authToken = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};

API.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        console.log('interceptors.response');
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
export { API, authToken };
