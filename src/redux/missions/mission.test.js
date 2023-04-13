import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../../routes/Missions';
import { getMissons, reserveToggle } from './missionSlice';
