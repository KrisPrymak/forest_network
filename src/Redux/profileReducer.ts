import { ResultCodesEnum } from './../api/api';
import { profileAPI } from "./../api/profileAPI";
import {  InferActionsTypes, BaseThunkType } from './reduxStore';
import { PostType, ProfileType, PhotosType } from './../types';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let initialState = {
  posts: [
    { id: 3, message: "it is my first post", likesCount: 0 },
    { id: 2, message: "pumpimpampampimpum", likesCount: 120 },
    { id: 1, message: "lalolalolaolaod", likesCount: 10 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: '' as string
};

type InitialState = typeof initialState;

export const actionsProfile = {
  addPost: (postText: string) => ({ type: ADD_POST, postText } as const),
  setUserProfile: (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const),
  setStatus: (status: string) => ({type: SET_STATUS, status} as const),
  savePhotoSuccess: (photo: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photo} as const)
}

type ActionsTypes = InferActionsTypes<typeof actionsProfile>;
type ThunkType = BaseThunkType<ActionsTypes>

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialState => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photo,
        } as ProfileType,
      };
    }
    default:
      return state;
  }
};

export const getUserProfile = (userId: number): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(actionsProfile.setUserProfile(data));
  };
};

export const getStatus = (userId: number): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(actionsProfile.setStatus(response.data));
  };
};

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === ResultCodesEnum.Success) {
      dispatch(actionsProfile.setStatus(status));
    }
  };
};

export const savePhoto = (photo: File): ThunkType => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === ResultCodesEnum.Success) {
      dispatch(actionsProfile.savePhotoSuccess(response.data.data.photos));
    }
  };
};

export default profileReducer;
