import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "./../../Redux/authReducer";
import { logout } from "./../../Redux/authReducer";
import { getUserProfile } from "../../Redux/profileReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, {
  setAuthUserData,
  getUserProfile,
  logout,
})(HeaderContainer);
