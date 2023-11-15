import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import cartReducer from '../slice/cartSlice';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
