import axios from 'axios';
import localToken from './LocalToken';

class ApiClient {
	constructor(baseURL, headers, config) {
		this.baseURL = baseURL;
		this.headers = headers;
		this.api = axios.create({ baseURL, headers });
	}

	get(endpoint) {
		return this.request('get', endpoint);
	}

	post(endpoint, body) {
		return this.request('post', endpoint, body);
	}

	put(endpoint, body) {
		return this.request('put', endpoint, body);
	}

	delete(endpoint) {
		return this.request('delete', endpoint);
	}

	request(method, url, data, config) {
		const headers = {
			...this.headers,
			access_token: `${localToken.get()}`,
		};

		if (!(data instanceof FormData)) {
			headers['Content-Type'] = 'application/json';
		}

		return this.api
			.request({
				method,
				url,
				data: method === 'post' || method === 'put' ? data : undefined,
				headers,
				...config,
			})
			.then((res) => res.data)
			.catch((error) => {
				console.error(error);
			});
	}
}

export default ApiClient;
