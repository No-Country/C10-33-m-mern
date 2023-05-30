import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  password: '',
  isLoggedIn: false,
  idToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
    signIn: (prevState, {payload}) => {
      return {
        ...prevState,
        isLoggedIn: true,
        idToken: payload.idToken,
        name: payload.name,
      };
    },
    signOut: (prevState, action) => {
      return {...prevState, isLoggedIn: false, idToken: null};
    },
  },
});

export const {resetUser, signIn, signOut} = userSlice.actions;

export default userSlice.reducer;
