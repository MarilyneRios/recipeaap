import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null, email: null, password: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Create a new user
    addUser: (state, action) => {
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
    },
    // Log in
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    // Log out
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
    // Update the username
    updateUsername: (state, action) => {
      state.value.username = action.payload;
    },
    // Update the password
    updatePassword: (state, action) => {
      state.value.password = action.payload;
    },
    // Remove a user (assuming you have an array of users)
    removeUser: (state, action) => {
      state.value = state.value.filter(user => user.name !== action.payload.name);
    },
  },
});

export const { addUser, login, logout, updateUsername, updatePassword, removeUser } = userSlice.actions;
export default userSlice.reducer;
