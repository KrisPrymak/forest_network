import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../Redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";
import { getUserProfile } from "./../../Redux/profileReducer";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {

    if (this.props.isAuth) {
      return <Navigate to='/login'/>
    }

    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(
  withRouter(ProfileContainer)
);
