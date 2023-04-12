import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: {},
    missions: missionsReducer,
  },
});

export default store;
