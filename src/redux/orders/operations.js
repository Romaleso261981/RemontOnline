import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchOrdersByCategory = createAsyncThunk(
  'order/fetchByCategory',
  async (category, thunkAPI) => {
    const url = `/orders/category/${category}`;
    try {
      const result = await API.get(url);
      return result.data.data.userWithPet;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const EditOrder = createAsyncThunk(
  'order/editing',
  async (order, { thunkAPI }) => {
    const { data, id} = order;
    try {
      const response = await API.post(`/orders/editing/${id}`, data);
      return response.data;
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
      const response = await API.post('/orders/order', order);
      toast.success('Замовлення додано');
      return response.data.allUserPets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI(error.message);
    }
  },
);

export const done = createAsyncThunk('order/done', async (orderId, thunkAPI) => {
  try {
    const response = await API.post(`/orders/done/${orderId}`, { orderId });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (orderId, thunkAPI) => {
    try {
      alert('Невидаляй бо ти незможеш видалити');
      // const response = await API.delete(`/orders/${petId}`, {petId});
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const finderOrder = createAsyncThunk(
  'order/finderOrder',
  async (orderId, thunkAPI) => {
    try {
      // const response = await API.delete(`/orders/${petId}`, {petId});
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
