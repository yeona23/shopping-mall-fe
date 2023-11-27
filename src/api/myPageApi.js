import APIClient from './ApiClient';

const MYPAGE_GET = '/me';
const MYPAGE_PUT = '/me';
const BASE_URL = 'http://3.34.122.57:8080';

export const myPageApi = new APIClient(BASE_URL + '/mypage');

export const myPageGet = async () => {
	return await myPageApi.get(MYPAGE_GET, {});
};

export const myPagePut = async (body) => {
	return await myPageApi.put(MYPAGE_PUT, {
		name: body.name,
		email: body.email,
		mobile: body.mobile,
		address: body.address,
		gender: body.gender,
		myInfo: body.myInfo,
		profile: body.profile,
		profileImg: body.profileImg,
	});
};
