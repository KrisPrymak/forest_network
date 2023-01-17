import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  getUsers,
} from "../../Redux/usersReducer";
import Preloader from "../commons/Preloader/Preloader";
import { compose } from "redux";
import {
  gettUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../Redux/usersSelectors";
import { UserType } from "../../types";
import { AppStateType } from "../../Redux/reduxStore";

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type OwnPropsType = {

}

type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}



type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStatetoProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: gettUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStatetoProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersContAPI);
