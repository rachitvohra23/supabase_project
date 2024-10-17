import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    authenticated: false,
    user: {
      id: '',
      name: ''
    }
  },
  reducers: {
    updateAuthState: (state, action) => {
      state.token = action.payload.token;
      state.authenticated = action.payload.authenticated;
      state.user = action.payload.user;
    }
  }
});

export const { updateAuthState } = authSlice.actions;
export default authSlice.reducer;
