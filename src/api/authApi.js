import APIClient from './ApiClient';

const REGISTER = '/register';
const LOG_IN = '/login';
const RE_FRESH = '/refresh';
const LOG_OUT = '/logout';
const SIGN_OUT = '/signout';
const BASE_URL = 'http://3.34.122.57:8080';

export const authApi = new APIClient(BASE_URL + '/api');

export const registerUser = async (body) => {
	return await authApi.post(REGISTER, {
		name: body.name,
		email: body.email,
		password: body.password,
		pwdck: body.pwdck,
		mobile: body.mobile,
	});
};

export const loginUser = async (body) => {
	return await authApi.post(LOG_IN, {
		email: body.email,
		password: body.password,
	});
};

export const logoutUser = async () => {
	return await authApi.post(LOG_OUT);
};

export const signoutUser = async (body) => {
	return await authApi.post(SIGN_OUT, {
		mobile: body.mobile,
		email: body.email,
		password: body.password,
	});
};
