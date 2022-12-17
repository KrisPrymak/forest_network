import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { setUserProfile, getUserProfile, getStatus, updateStatus } from "./../../Redux/profileReducer";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {

  redirectToMainUser() {
    let userId = this.props.match.params.userId;
    if(!userId) {
        userId = 27081;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
}

  componentDidMount() {
    this.redirectToMainUser();
  }

  componentDidUpdate(prevProps){
    if(this.props.isMain !== prevProps.isMain) {
        if(this.props.isMain){
            this.redirectToMainUser();
        }
    }
}

  render() {
    return <Profile {...this.props} updateStatus={this.props.updateStatus}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
