import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		SET_PRODUCTS(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { SET_PRODUCTS } = productSlice.actions;

export default productSlice.reducer;
