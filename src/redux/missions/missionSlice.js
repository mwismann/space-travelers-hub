import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissons = createAsyncThunk('missions/getMission',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  });

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveToggle: (state, action) => {
      state.missions = state.missions.map((mission) => (mission.mission_id === action.payload
        ? { ...mission, reserved: !mission.reserved } : mission));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissons.pending, () => ({
        isLoading: true,
      }))
      .addCase(getMissons.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missions: action.payload.map((mission) => ({
          mission_name: mission.mission_name,
          mission_id: mission.mission_id,
          description: mission.description,
        })),
      }))
      .addCase(getMissons.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export const { reserveToggle } = missionsSlice.actions;
export default missionsSlice.reducer;
