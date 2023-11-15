import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import cartReducer from '../slice/cartSlice';

const rootReducer = combineReducers({
	user: userReducer,
});

const store = configureStore({
	reducer: {
		rootReducer,
		cart: cartReducer,
	},
});

export default store;
