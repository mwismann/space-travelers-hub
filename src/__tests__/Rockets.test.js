import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../routes/Rockets';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

const mockStore = configureMockStore([]);

describe('Rockets', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            rocket_name: 'Rocket 1',
            description: 'Rocket 1 description',
            flickr_images: 'Rocket 1 image',
            isReserved: false,
          },
          {
            id: 2,
            rocket_name: 'Rocket 2',
            description: 'Rocket 2 description',
            flickr_images: 'Rocket 2 image',
            isReserved: true,
          },
        ],
        isLoading: false,
        isSuccess: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });

  test('Renders Rockets list', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketOne = screen.getByText('Rocket 1');
    expect(rocketOne).toBeInTheDocument();
    expect(screen.getByText('Rocket 1 description')).toBeInTheDocument();
    const reserveButton = screen.getByText('Reserve Rocket');
    expect(reserveButton).toBeInTheDocument();

    const rocketTwo = screen.getByText('Rocket 2');
    expect(rocketTwo).toBeInTheDocument();
    expect(screen.getByText('Rocket 2 description')).toBeInTheDocument();
    const cancelButton = screen.getByText('Cancel Reservation');
    expect(cancelButton).toBeInTheDocument();
  });

  test('testing join and leave toggle', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const reserveButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButton);
    expect(store.dispatch).toHaveBeenCalledWith(reserveRocket(1));

    const cancelButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelButton);
    expect(store.dispatch).toHaveBeenCalledWith(cancelReservation(2));
  });
});
