import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null, email:null, password:null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //créer un utilisateur
    addUser: (state, action) => {
        state.value.username = action.payload.username;
        state.value.email = action.payload.email;
        state.value.password = action.payload.password;
      },
    //connexion
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    //déconnexion
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
    //changer le username
    updateUsername: (state, action) => {
        state.value.username = action.payload;
    },

    //changer le mot de passe
    updatePassword: (state, action) => {
        state.value.username = action.payload;
    },
  },
});

export const { addUser, login, logout,updateUsername,updatePassword } = userSlice.actions;
export default userSlice.reducer;
