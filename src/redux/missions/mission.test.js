import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../../routes/Missions';
import { reserveToggle } from './missionSlice';

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

  test('renders mission table', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();

    const mission1 = screen.getByText('Mission 1');
    expect(mission1).toBeInTheDocument();
    expect(screen.getByText('Mission 1 description')).toBeInTheDocument();
    const joinButton1 = screen.getByText('Join Mission');
    expect(joinButton1).toBeInTheDocument();

    const mission2 = screen.getByText('Mission 2');
    expect(mission2).toBeInTheDocument();
    expect(screen.getByText('Mission 2 description')).toBeInTheDocument();
    const leaveButton2 = screen.getByText('Leave Mission');
    expect(leaveButton2).toBeInTheDocument();
  });

  test('testing join and leave toggle', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinButton1 = screen.getByText('Join Mission');
    fireEvent.click(joinButton1);
    expect(store.dispatch).toHaveBeenCalledWith(reserveToggle('1'));

    const leaveButton2 = screen.getByText('Leave Mission');
    fireEvent.click(leaveButton2);
    expect(store.dispatch).toHaveBeenCalledWith(reserveToggle('2'));
  });
});
