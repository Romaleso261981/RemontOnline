import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchPets = createAsyncThunk(
  '/user/pets',
  async (_, { thunkAPI }) => {
    try {
      const response = await API.get('/user/about');
      return response.data.data.userWithPet;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
export const EditOrder = createAsyncThunk(
  'order/editing',
  async (pet, { thunkAPI }) => {
    try {
      console.log('EditOrder');
      // const response = await API.post('/orders/editing', pet);
      toast.success('замовлення змінено');
      // return response.data.allUserPets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI(error.message);
    }
  },
);
export const addOrder = createAsyncThunk(
  'order/addPet',
  async (order, { thunkAPI }) => {
    try {
      console.log(order);
      const response = await API.post('/orders/order', order);
      toast.success('Замовлення додано');
      return response.data.allUserPets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI(error.message);
    }
  },
);
export const done = createAsyncThunk('order/done', async (petId, thunkAPI) => {
  try {
    alert('статус зміненно');
    console.log(petId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (orderId, thunkAPI) => {
    try {
      alert('Невидаляй бо ти незможеш видалити');
      console.log(orderId);
      // const response = await API.delete(`/orders/${petId}`, {petId});
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
