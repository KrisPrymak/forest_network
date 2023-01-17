import { instance, getUsersType, APIResponseType } from './api';

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const response = await instance
      .get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async deleteFollow(userId: number) {
    const response = await instance
      .delete<APIResponseType>(`follow/${userId}`);
    return response.data;
  },
  async postFollow(userId: number) {
    const response = await instance
      .post<APIResponseType>(`follow/${userId}`);
    return response.data;
  }
};
