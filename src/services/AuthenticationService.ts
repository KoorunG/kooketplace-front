import axios, { AxiosRequestConfig } from 'axios';
import { networkInterfaces } from 'os';

class AuthenticationService {
	baseUrl = 'http://localhost:8080';

	executeAuthenticationService = ({ userId, password }: { userId: string; password: string }) => {
		return axios.post(this.baseUrl + '/login', { userId, password });
	};

	registerJwtToLocalStorage = (userId: string, token: string) => {
		localStorage.setItem('token', token);
		localStorage.setItem('userId', userId);
		this.setupAxiosInterceptors();
	};

	setupAxiosInterceptors = () => {
		console.log('setupAxiosInterceptors 호출됨 ::::::::::::');
		axios.interceptors.request.use(
			(config: AxiosRequestConfig<any>) => {
				const token = localStorage.getItem('token');
				const jwtHeader: any = config.headers;
				if (token) {
					jwtHeader.Authorization = 'Bearer ' + token;
				}
				// config.headers['Content-Type'] = 'application/json';
				return config;
			},
			error => {
				Promise.reject(error);
			},
		);
	};
}

export default new AuthenticationService();
