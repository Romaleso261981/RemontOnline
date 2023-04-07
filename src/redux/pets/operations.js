import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchPets = createAsyncThunk(
  '/user/pets',
  async (_, { thunkAPI }) => {
    try {
      const response = await API.get('/user/about');
      console.log(response);
      return response.data.data.userWithPet;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);

export const editingOrder = createAsyncThunk(
  'order/editing',
  async (pet, { thunkAPI }) => {
    try {
      const response = await API.post('/orders/editing', pet);
      toast.success('замовлення змінено');
      return response.data.allUserPets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI(error.message);
    }
  },
);
export const addOrder = createAsyncThunk(
  'pets/addPet',
  async (pet, { thunkAPI }) => {
    try {
      const response = await API.post('/pets/pet', pet);
      toast.success('Замовлення додано');
      return response.data.allUserPets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI(error.message);
    }
  },
);

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await API.delete(`/pet/${petId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
