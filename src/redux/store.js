import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth-slice';
import { newsReducer } from './news/newsSlice';
import { noticesReducer } from './notices/noticesSlice';
import { userReducer } from './users/userSlice';
import { petsReducer } from './pets/petSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
    notices: noticesReducer,
    users: userReducer,
    pets: petsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
