import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://remontonlineback-production.up.railway.app/',
  // baseURL: 'https://petly-site-back.up.railway.app/',
  baseURL: 'http://localhost:8000',
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
      const refreshToken = localStorage.getItem('refreshToken');
      console.log(refreshToken);
      try {
        const { data } = await API.post('/auth/users/refresh', {
          refreshToken,
        });
        if (data.accessToken) {
          authToken.set(data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
        }
        return API(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
export { API, authToken };
