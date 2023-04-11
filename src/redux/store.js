import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    rockets: {},
    missions: {},
  },
});

export default store;
