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
    },
    login(email, password, rememberMe = false) {
      return instance
              .post('auth/login', {email, password, rememberMe})
    },
    logout() {
      return instance
              .delete('auth/login')
    },
};

export const profileAPI = {
  async getUserProfile(userId) {
    const response = await instance
      .get(`profile/${userId}`);
    return response.data;
  },
  getStatus(userId) {
    return instance
            .get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance
            .put(`profile/status`, {
              status: status
            })
  },
  savePhoto(photos) {
    const formData = new FormData();
    formData.append('image', photos)
    return instance
            .put('profile/photo', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
  }
}

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: "https://social-network.samuraijs.com/api/1.0/",
//   headers: {
//     "API-KEY": "4f40dc2c-8a66-41e5-a42b-595bc217a15c",
//   },
// });