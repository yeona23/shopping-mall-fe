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
		return this.api
			.request({
				method,
				url,
				data: method === 'post' || method === 'put' ? data : undefined,
				headers: {
					...this.headers,
					access_token: `${localToken.get()}`,
					'Content-Type': 'application/json',
				},
				...config,
			})
			.then((res) => res.data)
			.catch((error) => {
				console.error(error);
			});
	}
}

export default ApiClient;
