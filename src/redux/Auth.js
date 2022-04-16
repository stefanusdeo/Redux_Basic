import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthentication: false };

const authReducer = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const authActions = authReducer.actions;
export default authReducer.reducer;
