import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import {  getUserProfile, getStatus, updateStatus, savePhoto } from "../../Redux/profileReducer";
import { compose } from "redux";
import { ProfileType } from "../../types";
import { AppStateType } from "../../Redux/reduxStore";
import { actionsProfile } from "../../Redux/profileReducer";

//@ts-ignore
export function withRouter(Children) {
  //@ts-ignore
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

type MapStatePropsType = {
  profile: ProfileType | null
  isAuth: boolean
  status: string
  authUserId: string | null
}

type MapDispatchPropsType = {
  setUserProfile: () => void
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: () => void
  savePhoto: () => void
}

type OwnPropsType = {
  isMain: boolean
}

type PathParamsType = {
  userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & PathParamsType




class ProfileContainer extends React.Component<PropsType> {

  redirectToMainUser() {
    //@ts-ignore
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.redirectToMainUser();
  }
//@ts-ignore
  componentDidUpdate(prevProps) {
    if (this.props.isMain !== prevProps.isMain) {
      if (this.props.isMain) {
        this.redirectToMainUser();
      }
    }
  }

  render() {
    //@ts-ignore
    return <Profile status={this.props.status} savePhoto={this.props.savePhoto} updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId} profile={this.props.profile} />
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
  };
};

const setUserProfile = actionsProfile.setUserProfile;

export default compose<React.ComponentType>(
  connect(mapStateToProps, { setUserProfile, getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter
)(ProfileContainer);
