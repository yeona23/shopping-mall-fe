import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 1,
		name: 'Shoes',
		price: 50000,
		quantity: 2,
		img: '/assets/main1.jpg',
		color: 'black',
		size: 'm',
	},
	{
		id: 2,
		name: 'Sweatshirt',
		price: 26000,
		quantity: 1,
		img: '/assets/main2.jpg',
		color: 'white',
		size: 's',
	},
	{
		id: 3,
		name: 'Short Sleeved Shirt',
		price: 36200,
		quantity: 4,
		img: '/assets/main3.jpg',
		color: 'gray',
		size: 'l',
	},
];

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		REMOVE_CART_ITEM(state, action) {
			const removeId = action.payload;
			state = state.filter((item) => item.id !== removeId);
			return state;
		},
		MINUS_ITEM_QUANTITY(state, action) {
			const changeId = action.payload.id;
			const changeItem = state.find((item) => item.id === changeId);
			changeItem.quantity--;
		},
		PLUS_ITEM_QUANTITY(state, action) {
			const changeId = action.payload.id;
			const changeItem = state.find((item) => item.id === changeId);
			changeItem.quantity++;
		},
	},
});

export const { REMOVE_CART_ITEM, MINUS_ITEM_QUANTITY, PLUS_ITEM_QUANTITY } =
	cartSlice.actions;

export default cartSlice.reducer;
