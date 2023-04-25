import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deleteOrder, addOrder, done } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const fetchPetsSucceesReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};
const changeOrderSucceesReducer = (state, action) => {
  console.log('changeOrderSucceesReducer');
  state.items = action.payload;
  state.isLoading = false;
};

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPets.pending, pendingReducer)
      .addCase(fetchPets.fulfilled, fetchPetsSucceesReducer)
      .addCase(fetchPets.rejected, rejectedReducer)
      .addCase(done.pending, pendingReducer)
      .addCase(done.fulfilled, changeOrderSucceesReducer)
      .addCase(done.rejected, rejectedReducer)
      .addCase(addOrder.pending, pendingReducer)
      .addCase(addOrder.fulfilled, fetchPetsSucceesReducer)
      .addCase(addOrder.rejected, rejectedReducer)
      .addCase(deleteOrder.pending, pendingReducer)
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteOrder.rejected, rejectedReducer);
  },
});

export const petsReducer = petsSlice.reducer;
