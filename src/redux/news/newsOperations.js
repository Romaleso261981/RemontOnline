import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('/news', async (_, { rejectWithValue }) => {
  try {
    const response = await API.get('/news');
    console.log(response);
    return response.data;

  } catch (e) {
    console.log('fetchNewsErr:', e.message);
    return rejectWithValue(e.message);
  }
});


// export const fetchData = async ({ transaction, date }) => {
//   try {
//     const bodyRequest = {
//       type: "income",
//       month: date.mm,
//       year: date.yyyy,
//     };
//     const response = await API.get('/api/finances/', { params: bodyRequest });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };