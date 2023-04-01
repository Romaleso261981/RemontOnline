import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  '/news',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/news');
      return response.data;
    } catch (e) {
      console.log('fetchNewsErr:', e.message);
      return rejectWithValue(e.message);
    }
  },
);
