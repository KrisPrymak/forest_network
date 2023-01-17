export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotosType = {
  small: null | string;
  large: null | string;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

export type StatusType = string

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}

export type SongType = {
  id: number
  add: boolean
  play: boolean
  name: string
  author: string
  length: {min: number, sec: number}
}