import { AxiosPromise } from 'axios';
import { instance, APIResponseType, getAuthDataType } from './api';

export const authAPI = {
  async getAuth() {
    const response = await instance
      .get<APIResponseType<getAuthDataType>>('auth/me');
    return response.data;
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post<APIResponseType>('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance
      .delete('auth/login') as AxiosPromise<APIResponseType>;
  },
};
