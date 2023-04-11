import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissons = createAsyncThunk('missions/getMission',
  async(_, {rejectWithValue}) => {
    const response = await fetch(url)
    const data = response.json()
    return data
  }
)