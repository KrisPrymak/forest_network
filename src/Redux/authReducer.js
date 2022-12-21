import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const getAuth = () => {
  return async (dispatch) => {
    const data = await authAPI.getAuth();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
      if (response.data.resultCode === 0) {
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

export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
  };
};

export default authReducer;
