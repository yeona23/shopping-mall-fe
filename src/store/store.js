import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import cartReducer from '../slice/cartSlice';
import productSlice from '../slice/productSlice';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	product: productSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
