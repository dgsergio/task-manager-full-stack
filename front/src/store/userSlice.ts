import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '.';

export type User = {
  id: string;
  name: string;
  token: string;
  email?: string;
};

export interface UserState {
  user: User | undefined;
  showSignin: boolean;
  showSignup: boolean;
  requestStatus: { loading: boolean; msg: string };
}

const initialState: UserState = {
  user: undefined,
  showSignin: false,
  showSignup: false,
  requestStatus: { loading: false, msg: '' },
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
    signinUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<{ loading: boolean; msg: string }>
    ) => {
      state.requestStatus = action.payload;
    },
  },
});

type Req = {
  url: string;
  body: { email: string; password: string; name?: string };
};

export const postUser = ({ url, body }: Req) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setStatus({ loading: true, msg: '' }));
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(body.name);
      if (!response.ok) throw new Error(data.msg);

      const {
        token,
        user: { name, id },
      } = data;
      localStorage.setItem('user', JSON.stringify({ name, token }));
      dispatch(signinUser({ id, name, email: body.email, token }));
      dispatch(setStatus({ loading: false, msg: '' }));
      return true;
    } catch (err: any) {
      dispatch(setStatus({ loading: false, msg: err.message }));
      return false;
    }
  };
};

export const { toggleSignin, toggleSignup, signinUser, setStatus } =
  userSlice.actions;

export default userSlice.reducer;
