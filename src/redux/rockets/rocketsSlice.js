import { createSlice } from '@reduxjs/toolkit';
import getRockets from './actions';

const initialState = {
  rockets: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      });
  },
});

export default rocketsSlice.reducer;
