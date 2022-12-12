import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "4f40dc2c-8a66-41e5-a42b-595bc217a15c",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
  },
  deleteFollow(userId) {
    return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
  },
  postFollow(userId) {
    return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
  }
};

export const authAPI = {
    getAuth() {
        return instance
                .get('auth/me')
                .then(response => response.data)
    }
};