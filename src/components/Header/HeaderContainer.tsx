import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../Redux/authReducer";
import { getUserProfile } from "../../Redux/profileReducer";
import { actions } from "../../Redux/authReducer";
import { AppStateType } from "../../Redux/reduxStore";



type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logout: () => void
  getUserProfile: (userId: number) => void
  setAuthUserData: (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => void
}

class HeaderContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

let setAuthUserData = actions.setAuthUserData

export default connect<MapStatePropsType, MapDispatchPropsType, unknown, AppStateType>(mapStateToProps, {
  getUserProfile,
  logout,
  setAuthUserData
})(HeaderContainer);
