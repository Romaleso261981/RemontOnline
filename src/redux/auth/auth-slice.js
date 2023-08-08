import { createSlice } from '@reduxjs/toolkit';

import {
  Register,
  logIn,
  logOut,
  refreshUser,
  googleAuth,
} from './auth-operations';

export const initialState = {
  user: {
    email: '',
  },
  error: null,
  isLoading: true,
  isRefreshing: false,
  isLoggedIn: true,
  accessToken: null,
  refreshToken: null,
  sid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(Register.fulfilled, state => {
        state.isRegister = true;
      })
      .addCase(logIn.pending, state => {
        state.isLogin = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLogin = false;
      })
      .addCase(logOut.pending, (state, { payload }) => {
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
      })
      .addCase(refreshUser.fulfilled, (state, {payload}) => {
        const { data, accessToken, refreshToken } = payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = data.user;
        state.isRefreshing = true;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken, sid } = action.payload;
        state.user = user;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.sid = sid;
        state.isLogin = true;
      }),
});

export const authReducer = authSlice.reducer;
