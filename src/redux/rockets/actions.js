import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return error;
    }
  },
);

export default getRockets;
