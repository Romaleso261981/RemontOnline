import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOrdersByCategory,
  addOrder,
  done,
  finderOrder,
} from './operations';

const pendingReducer = state => {
  state.isLoading = true;
  state.error = null;
  state.searchBtnIsActive = true;
};

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const fetchPetsSucceesReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.orderList = action.payload;
  state.searchBtnIsActive = true;
};

const changeOrderSucceesReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orderList: [],
    ownList: [],
    favoriteList: [],
    isLoading: false,
    searchBtnIsActive: true,
    error: null,
    searchError: null,
    items: [],
    order: {},
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOrdersByCategory.pending, pendingReducer)
      .addCase(fetchOrdersByCategory.fulfilled, fetchPetsSucceesReducer)
      .addCase(fetchOrdersByCategory.rejected, rejectedReducer)
      .addCase(done.pending, pendingReducer)
      .addCase(done.fulfilled, changeOrderSucceesReducer)
      .addCase(done.rejected, rejectedReducer)
      .addCase(addOrder.pending, pendingReducer)
      .addCase(addOrder.fulfilled, fetchPetsSucceesReducer)
      .addCase(addOrder.rejected, rejectedReducer)
      .addCase(finderOrder.pending, pendingReducer)
      .addCase(finderOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
