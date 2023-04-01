import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


export const register = createAsyncThunk(
  '/auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/auth/signup', credentials);
      return data;
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  },
);
