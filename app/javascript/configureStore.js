import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetings';

const store = configureStore({
  reducer: {
    greetings: greetingReducer
  },
});

export default store;