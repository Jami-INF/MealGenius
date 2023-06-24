import React from 'react';
import { expect, test } from '@jest/globals';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import testReducer from "./reducerMock";
import FavoriteCard from '../components/FavoriteCard';

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

// When using a Data Provider (like redux) in your App, you will need to wrap all your tested component into a test Provider
// You cannot use the exact same provider and store you create in App.tsx file because here you want mocked data into your store
const Wrapper = ({ children }) => (<Provider store={store}>{children}</Provider>);

describe('<FavoriteCard/>', () => {
  test('Assert displayed values', () => {
    const expecteFavoritesInfos = store.getState().mealReducer[0]
    console.log(expecteFavoritesInfos)

    render(<Wrapper>
      <FavoriteCard meal={expecteFavoritesInfos} onDelete={() => any }/>
    </Wrapper>);

    expect(screen.getByTestId('meal-name')).toHaveTextContent(expecteFavoritesInfos.name);
    expect(screen.getByTestId('meal-description')).toHaveTextContent(expecteFavoritesInfos.description);
    expect(screen.getByTestId("meal-image")).toHaveProp("source", { uri: expecteFavoritesInfos.image });

    // let mealsListSize = store.getState().appReducer.mealReducer.length;
    // // Use @testing-library to press our "delete" button
    // fireEvent.press(screen.getByTestId("remove-button"));
    // // Make sure that this press action has delete our nounours from our current state (in our test store).
    // expect(store.getState().appReducer.nounours.length).toBe(nounoursListSize - 1);
  });
});
