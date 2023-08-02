import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../models/types';
import { userDummy } from '../mocks/dummy';

export interface UserState {
  user: User;
  showSignin: boolean;
  showSignup: boolean;
}

const initialState: UserState = {
  user: userDummy,
  showSignin: false,
  showSignup: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSignin: (state, action: PayloadAction<boolean>) => {
      state.showSignin = action.payload;
    },
    toggleSignup: (state, action: PayloadAction<boolean>) => {
      state.showSignup = action.payload;
    },
  },
});

export const { toggleSignin, toggleSignup } = userSlice.actions;

export default userSlice.reducer;
