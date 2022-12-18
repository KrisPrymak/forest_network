import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleIsFollowingInProgress,
  getUsers
} from "./../../Redux/usersReducer";
import Preloader from "../commons/Preloader/Preloader";
import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";

class UsersContAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
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
          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
          setCurrentPage={this.props.setCurrentPage}
        />
      </>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStatetoProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFollowingInProgress,
    getUsers,
  })
)(UsersContAPI);
