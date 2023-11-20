import APIClient from './ApiClient';

export const productApi = new APIClient('/data');

export const getProducts = async () => {
	return await productApi.get('product.json');
};
