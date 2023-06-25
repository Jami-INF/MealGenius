import React from 'react';
import { expect, test } from '@jest/globals';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import testReducer from "./reducerMock";
import Time from "../components/Time";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMeals } from '../stub/stub';

// To wait for things like animation to be fully loaded.
jest.useFakeTimers();

// Configure store for testing purpose
const store = configureStore({
  reducer: {
    mealReducer: testReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

AsyncStorage.getItem.mockResolvedValue(JSON.stringify(getMeals()));

// Mock DarkThemeContext
jest.mock('../components/Time', () => {
  const theme = {
    primaryColor: 'blue',
    backgroundColor: 'white'
  };

  const DarkThemeContext = {
    Consumer: ({ children }) => children(theme),
  };

  return {
    DarkThemeContext,
  };
});

// When using a Data Provider (like redux) in your App, you will need to wrap all your tested component into a test Provider
// You cannot use the exact same provider and store you create in App.tsx file because here you want mocked data into your store
const Wrapper = ({ children }) => (<Provider store={store}>{children}</Provider>);

describe('<Time/>', () => {
  test('Assert displayed values', () => {
    render(
        <Wrapper store={store}><Time time={130}/></Wrapper>
    );

    expect(screen.getByTestId('time')).toHaveTextContent('2 h 10 m');
  });
});
