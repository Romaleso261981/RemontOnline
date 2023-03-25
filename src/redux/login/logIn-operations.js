import {API, authToken} from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const logIn = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await API.post('/auth/login', credentials);
      console.log(response.data);

      authToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
