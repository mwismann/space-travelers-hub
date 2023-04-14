import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsSlice from './rockets/rocketsSlice';
import missionsReducer from './missions/missionSlice';

const rootReducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
