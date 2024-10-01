import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import userReducer from '../features/userSlice';

const rootReducer = combineReducers({
	user: userReducer,
	form: formReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
