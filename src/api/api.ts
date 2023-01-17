import { UserType } from './../types';
import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "4f40dc2c-8a66-41e5-a42b-595bc217a15c",
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

export type APIResponseType<D = {}> = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: D
}

export type getUsersType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type PutPhotoDataType = {
   photos: {
    small: string
    large: string
}
   }

export type getAuthDataType = {
    id: string
  email: string
  login: string
}
