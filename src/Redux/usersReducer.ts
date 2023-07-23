import { ResultCodesEnum } from './../api/api';
import { usersAPI } from "./../api/usersAPI";
import { InferActionsTypes, BaseThunkType } from './reduxStore';
import { UserType } from './../types';
import { Dispatch } from 'react';

// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
// const SET_USERS = "SET-USERS";
// const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
// const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
// const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
// const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users id
//   filter: {
//     term: '',
//     friend: null as null | boolean
// }
};

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export const actions = {
  followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
  unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
  setUsers: (usersArray: Array<UserType>) => ({type: 'SET_USERS', usersArray} as const),
  setCurrentPage: (pageNumber: number) => ({type: 'SET_CURRENT_PAGE', pageNumber} as const),
  setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  toggleIsFollowingInProgress: (isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS', isFetching, userId} as const),
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.usersArray,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((p) => p !== action.userId)],
      };
    default:
      return state;
  }
};

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.toggleIsFetching(false));
  };
};

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleIsFollowingInProgress(true, userId));
  let data = await apiMethod(userId)
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleIsFollowingInProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), actions.followSuccess)
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), actions.unfollowSuccess);
  };
};

export default usersReducer;
