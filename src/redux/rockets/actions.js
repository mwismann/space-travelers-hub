import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    try {
      const res = await fetch(URL);
      const data = res.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

export default getRockets;
