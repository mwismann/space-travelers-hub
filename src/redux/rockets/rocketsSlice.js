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
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      state.rockets.filter((rocket) => {
        if (rocket.id === id) {
          rocket.isReserved = true;
        }
        return rocket;
      });
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      state.rockets.filter((rocket) => {
        if (rocket.id === id) {
          rocket.isReserved = false;
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
          isReserved: false,
        }));
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
