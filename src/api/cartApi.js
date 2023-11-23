import ApiClient from './ApiClient';

const UPDATE = '/update';
const REGISTER = '/register';
const GET_CART = '/get';
const BASE_URL = 'http://3.34.122.57:8080';

// mock
const cartMockApi = new ApiClient('/data');

export const getMockCart = async () => {
	return await cartMockApi.get('cart.json');
};

// real api
const cartApi = new ApiClient(BASE_URL + '/api/cart');

export const getCartProducts = async () => {
	return await cartApi.get(GET_CART);
};

export const registerCartProduct = async (endpoint, body) => {
	return await cartApi.post(REGISTER + `/${endpoint}`, {
		quantity: body.count,
		color: body.color,
		size: body.size,
	});
};

export const updateCartProduct = async (endpoint, body) => {
	return await cartApi.put(UPDATE + `/${endpoint}`, {
		color: body.color,
		size: body.size,
		cartQuantity: Number(body.quantity),
	});
};
