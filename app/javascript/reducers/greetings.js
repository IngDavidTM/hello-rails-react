import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/greetings/random';
const GET_INFO = 'hello_rails_react/greetings/GET_INFO';
const initialState = {
    greetings: '',
};

const greetingReducer = ( state = initialState, action) => {
    switch (action.type) {
        case `${GET_INFO}/fulfilled`:
            return { ...state, greetings: action.payload}
         default :
            return state;
    }       
};

export const fetchGreeting = createAsyncThunk(GET_INFO, async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result;
});

export default greetingReducer;