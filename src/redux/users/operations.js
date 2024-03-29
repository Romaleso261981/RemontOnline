import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('/user', async (_, { thunkAPI }) => {
  try {
    const response = await API.get('/user/about');
    return response.data.data.user;
  } catch (error) {
    console.log('fetchUserError:', error.message);
    return thunkAPI(error.message);
  }
});
export const uploadAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (file, { thunkAPI }) => {
    try {
      const formData = new FormData();
      formData.append('avatarUrl', file);
      const response = await API.put('/auth/change', formData);
      return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
export const refreshUser = createAsyncThunk(
  'user/changeAvatar',
  async (file, { thunkAPI }) => {
    try {
      console.log("refreshUser")
      // const formData = new FormData();
      // formData.append('avatarUrl', file);
      // const response = await API.post('/user/current');
      // return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
export const uploadUser = createAsyncThunk(
  'user/change',
  async (formData, { thunkAPI }) => {
    try {
      const response = await API.put('/auth/change', formData);
      return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
