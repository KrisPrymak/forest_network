import { ResultCodesEnum } from './../api/api';
import { authAPI } from "./../api/authAPI";
//@ts-ignore
import { stopSubmit } from "redux-form";
import { InferActionsTypes, BaseThunkType } from './reduxStore';

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let initialState = {
  userId: null as null | string,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
};

type InitialState = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth }})
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export const getAuth = (): ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.getAuth();
    if (data.resultCode === ResultCodesEnum.Success) {
      let { id, email, login } = data.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
      if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuth());
      } else {
        let errorText =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit('login', { _error: errorText }));
      }
  };
};

export const logout = (): ThunkType => {
  return async (dispatch) => {
    const response = await authAPI.logout();
      if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
      }
  };
};

export default authReducer;
