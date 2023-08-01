import { createSlice } from '@reduxjs/toolkit';
import { User } from '../models/types';
import { userDummy } from '../mocks/dummy';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: userDummy,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
