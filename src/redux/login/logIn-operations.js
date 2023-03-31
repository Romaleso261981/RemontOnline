import { API, authToken } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


export const logIn = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await API.post('/auth/login', credentials);
      authToken.set(response.data.data.accessToken);

      return response.data;
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logOut = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await API.get('/auth/logout');
    authToken.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      authToken.set(persistedToken);
      const res = await API.post('/auth/login');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
