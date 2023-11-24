import ApiClient from './ApiClient';

const REGISTER = '/register';
const GET_ALL = '/getAll';
const USER_SELL = '/userSell';
const IMAGE_UPLOAD = '/imgUpload';
const STOCK_MODIFY = '/stockModify';
const DISCOUNT = '/discount';
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
	return await productApi.post(REGISTER, {
		name: body.name,
		price: Number(body.price),
		description: body.description,
		stock: Number(body.stock),
		enroll: body.enroll,
		category: body.main_category,
		subCategory: body.sub_category,
	});
};

export const registerImage = async (productId, body) => {
	return await productApi.post(IMAGE_UPLOAD + `?id=${productId}`, body);
};

export const updateStock = async (productId, stock) => {
	return await productApi.post(STOCK_MODIFY + `/${productId}`, {
		stock: Number(stock),
	});
};

export const updateDiscount = async (productId, discount) => {
	return await productApi.post(DISCOUNT + `/${productId}`, {
		discount: Number(discount),
	});
};
