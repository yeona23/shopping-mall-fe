import ApiClient from './ApiClient';
import localToken from './LocalToken';

const REGISTER = '/register';
const GET_ALL = '/getAll';
const USER_SELL = '/userSell';
const BASE_URL = 'http://3.34.122.57:8080';

const productMockApi = new ApiClient('/data');

export const getProductsMock = async () => {
	return await productMockApi.get('product.json');
};

export const productApi = new ApiClient(BASE_URL + '/api/product');

export const getProducts = async () => {
	return await productApi.get(GET_ALL);
};

export const getUserSellProducts = async () => {
	return await productApi.get(USER_SELL);
};

export const registerProduct = async (body) => {
	const token = localToken.get();

	return await productApi.post(REGISTER, {
		productName: body.name,
		productPrice: Number(body.price),
		productInfo: body.description,
		productStock: Number(body.stock),
		productSell: 0,
		productEnroll: body.enroll,
		productImg: '이미지',
		category: body.main_category,
		subCategory: body.sub_category,
	});
};
