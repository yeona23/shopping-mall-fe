import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProductsMock } from '../api/productApi';

export const fetchProduct = () => {
	return async (dispatch) => {
		try {
			const data = await getProductsMock();
			// const data = await getProducts();
			dispatch(SET_PRODUCTS(data));
		} catch (error) {
			console.error('error setting initial data', error);
		}
	};
};

const initialState = [];

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		SET_PRODUCTS(state, action) {
			state = action.payload;
			return state;
		},
		SET_SELL_PRODUCT(state, action) {
			state.push(action.payload);
		},
	},
});

export const { SET_PRODUCTS, SET_SELL_PRODUCT } = productSlice.actions;

export default productSlice.reducer;
