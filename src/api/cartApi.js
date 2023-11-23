import ApiClient from './ApiClient';

const REGISTER = '/register';
const GET_CART = '/get';
const BASE_URL = 'http://3.34.122.57:8080';

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
