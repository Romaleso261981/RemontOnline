import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('/news', async (_, { rejectWithValue }) => {
  try {
    const response = await API.get('/news');
    return response.data;

  } catch (e) {
    return rejectWithValue(e.message);
  }
});

