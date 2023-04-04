import { API, authToken } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';


import Notiflix from 'notiflix';
import { toast } from 'react-toastify';
import { notifySettings } from '../../utils/notifySettings';


const Register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await API.post('/auth/signup', credentials);
    console.log(data);
    return data;
  } catch (error) {
    toast.error('Server error, please try again later');
  }
});

const logIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const { data } = await API.post('/auth/login', userData);
    console.log(data);
    authToken.set(data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    Notiflix.Notify.success(
      `Радо вітаємо, ${data.user.email}!`,
      notifySettings,
    );
    return data;
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === 'en'
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure('Щось пішло не так...', notifySettings);
    return thunkAPI.rejectWithValue(error.request.status);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.get('/auth/logout');
     Notiflix.Notify.info(
       'Бережіть себе і до зустрічі &#9996;',
       notifySettings,
     );
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === 'en'
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure('Щось пішло не так...', notifySettings);
    return thunkAPI.rejectWithValue(error);
  }
});

const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { token } = state.auth;
      authToken.set(token);
      const { data } = await API.get('/user/current');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      const state = getState();
      const { lang } = state.language.lang;
      lang === 'en'
        ? Notiflix.Notify.failure('Please login again!', notifySettings)
        : Notiflix.Notify.failure(
            'Будь ласка, залогіньтесь знову!',
            notifySettings,
          );
      return rejectWithValue(error);
    }
  },
);

const googleAuth = createAsyncThunk(
  'auth/googleAuth',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('/auth/google', credentials);
      authToken.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export { Register, logIn, logOut, refreshUser, googleAuth };

// import { API, authToken } from '../../API';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// export const register = createAsyncThunk(
//   '/auth/signup',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await API.post('/auth/signup', credentials);
//       return data;
//     } catch (e) {
//       toast.error(e.response.data.message);
//       return rejectWithValue(e.message);
//     }
//   },
// );

// export const logIn = createAsyncThunk(
//   '/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await API.post('/auth/login', credentials);
//       authToken.set(response.data.data.accessToken);
//       return response.data;
//     } catch (e) {
//       toast.error(e.response.data.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await API.get('auth/logout');
//     authToken.unset();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const currentUser = createAsyncThunk(
//   'auth/current',
//   async (_, thunkAPI) => {
//     console.log('currentUser');
//     const state = thunkAPI.getState();
//       const persistedToken = state.accessToken;
//     console.log(persistedToken);

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       authToken.set(persistedToken);
//       const res = await API.post('/user/current');
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
