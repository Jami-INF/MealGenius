import {configureStore} from '@reduxjs/toolkit'
import mealReducer from './reducers/mealReducer';

const reducer = {
  mealReducer: mealReducer,
}

// @ts-ignore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
},);

export default store;