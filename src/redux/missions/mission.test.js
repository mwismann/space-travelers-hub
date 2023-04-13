import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../../routes/Missions';
import { getMissons, reserveToggle } from './missionSlice';


const mockStore = configureMockStore([]);

describe('Missions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_name: 'Mission 1',
            mission_id: '1',
            description: 'Mission 1 description',
            reserved: false,
          },
          {
            mission_name: 'Mission 2',
            mission_id: '2',
            description: 'Mission 2 description',
            reserved: true,
          },
        ],
        isLoading: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });
})