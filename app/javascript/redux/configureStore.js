import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greeting';

const store = configureStore({
  reducer: {
    greetings: greetingReducer
  },
});

export default store;