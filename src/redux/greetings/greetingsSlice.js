import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const greetingsUrl = 'http://localhost:3000/greetings/random';

export const fetchData = createAsyncThunk(
  'greetings/fetchData',
  async () => {
    try {
      const response = await axios.get(greetingsUrl);
      console.log('fetched data', response.data);
      return response.data.greeting;
    } catch (error) {
      throw new Error('Failed to fetch.');
    }
  },
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
