import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {API} from '../../API';

const Register = createAsyncThunk('/register', async credentials => {
    console.log(credentials);
  try {
      const response = await API.post('/auth/signup', credentials);
      console.log(response.data);
      return response.data;
      
  } catch (error) {
    toast.error('Server error, please try again later');
  }
});

export { Register };