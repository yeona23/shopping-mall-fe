import { createSlice } from '@reduxjs/toolkit';
import { getCartProducts, getMockCart } from '../api/cartApi';

export const setInitialData = () => {
	return async (dispatch) => {
		try {
			// const data = await getCartProducts();
			const data = await getMockCart();
			dispatch(GET_INITIAL_ITEMS(data));
		} catch (error) {
			console.error('error setting initial data', error);
		}
	};
};

const initialState = [];

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		GET_INITIAL_ITEMS(state, action) {
			state = action.payload;
			return state;
		},
		REMOVE_CART_ITEM(state, action) {
			const removeId = action.payload;
			state = state.filter((item) => item.productId !== removeId);
			return state;
		},
		REMOVE_CHECKED_ITEM(state, action) {
			const checkedIds = action.payload;
			state = state.filter((item) => !checkedIds.includes(item.productId));
			return state;
		},
		MINUS_ITEM_QUANTITY(state, action) {
			const changeId = action.payload.productId;
			const changeItem = state.find((item) => item.productId === changeId);
			changeItem.quantity--;
		},
		PLUS_ITEM_QUANTITY(state, action) {
			const changeId = action.payload.productId;
			const changeItem = state.find((item) => item.productId === changeId);
			changeItem.quantity++;
		},
		ORDER_CHECKED_ITEMS(state, action) {
			const checkedIds = action.payload;
			state = state.filter((item) => checkedIds.includes(item.productId));
			return state;
		},
	},
});

export const {
	REMOVE_CART_ITEM,
	MINUS_ITEM_QUANTITY,
	PLUS_ITEM_QUANTITY,
	REMOVE_CHECKED_ITEM,
	GET_INITIAL_ITEMS,
	ORDER_CHECKED_ITEMS,
} = cartSlice.actions;

export default cartSlice.reducer;
