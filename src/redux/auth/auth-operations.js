import { API, authToken } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';

import Notiflix from 'notiflix';
import { toast } from 'react-toastify';
import { notifySettings } from '../../utils/notifySettings';

const Register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await API.post('/auth/signup', credentials);
    return data;
  } catch (error) {
    toast.error('Server error, please try again later');
  }
});

const logIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const { data } = await API.post('/auth/login', userData);
    authToken.set(data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    Notiflix.Notify.success(
      `Радо вітаємо, ${data.user.email}!`,
      notifySettings,
    );
    return data;
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === 'en'
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure('Щось пішло не так...', notifySettings);
    return thunkAPI.rejectWithValue(error.request.status);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const respons = await API.get('/auth/logout');
    localStorage.setItem('refreshToken', '');
    authToken.unset();
    Notiflix.Notify.info('Бережіть себе і до зустрічі &#9996;', notifySettings);
    return respons.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так...', notifySettings);
    return thunkAPI.rejectWithValue(error);
  }
});

const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await API.post('/user/current', { refreshToken });
      authToken.set(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      // Notiflix.Notify.success(
      //   `Ми знов разом, ${data.data.user.email}!`,
      //   notifySettings,
      // );
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      // Notiflix.Notify.failure(
      //   'Будь ласка, залогіньтесь знову!',
      //   notifySettings,
      // );
      return rejectWithValue(error);
    }
  },
);

const googleAuth = createAsyncThunk(
  'auth/googleAuth',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/auth/google', credentials);
      authToken.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export { Register, logIn, logOut, refreshUser, googleAuth };

