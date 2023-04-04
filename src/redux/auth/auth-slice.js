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
  isLoggedIn: false,
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
        console.log('logIn.pending');
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
        console.log('logOut.pending');
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        console.log('logOut.fulfilled');
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        console.log('logOut.rejected');
      })
      .addCase(refreshUser.pending, state => ({
        ...state,
        isLogin: false,
      }))
      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        token: payload.token,
        email: payload.user.email,
        isLogin: true,
      }))
      .addCase(refreshUser.rejected, state => ({
        ...state,
        isLogin: false,
      }))
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
