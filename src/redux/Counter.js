import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { conter: 0, showNumber: true };

const conterReducer = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    add(state) {
      state.conter++;
    },
    min(state) {
      state.conter--;
    },
    dynamic(state, action) {
      state.conter = state.conter + action.payload;
    },
    toggle(state) {
      state.showNumber = !state.showNumber;
    },
  },
});

export const counterActions = conterReducer.actions;

export default conterReducer.reducer;
