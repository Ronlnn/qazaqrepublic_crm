import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../App/store';

export interface User {
	email: string;
	loggedIn: boolean;
}

interface UserState {
	user: User | null;
}

const initialState: UserState = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			return { ...state, user: action.payload };
		},
		logout: state => {
			return { ...state, user: null };
		},
	},
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
