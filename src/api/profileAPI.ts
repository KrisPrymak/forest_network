import { ProfileType } from './../types';
import { instance, PutPhotoDataType, APIResponseType } from './api';

export const profileAPI = {
  async getUserProfile(userId: number) {
    const response = await instance
      .get<ProfileType>(`profile/${userId}`);
    return response.data;
  },
  getStatus(userId: number) {
    return instance
      .get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance
      .put<APIResponseType>(`profile/status`, {
        status: status
      });
  },
  savePhoto(photos: File) {
    const formData = new FormData();
    formData.append('image', photos);
    return instance
      .put<APIResponseType<PutPhotoDataType>>('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  }
};
