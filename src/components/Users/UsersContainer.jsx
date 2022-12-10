import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "./../../Redux/usersReducer";
import Preloader from "../commons/Preloader/Preloader";

class UsersContAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  }

  // isFetching = (fetchValue) => {
  //     if (this.props.isFetching) {
  //       return <Preloader />
  //   } else {
  //     return <Users totalUsersCount={this.props.totalUsersCount}
  //                 pageSize={this.props.pageSize}
  //                 currentPage={this.props.currentPage}
  //                 onPageChanged={this.onPageChanged}
  //                 users={this.props.users}
  //                 unfollow={this.props.unfollow}
  //                 follow={this.props.follow}
  //   />
  //   }
  // }

  render() {

    return <>
      {this.props.isFetching && <Preloader />}
      <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
    />
    </>
  }
}

let mapStatetoProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (usersArray) => {
      dispatch(setUsersAC(usersArray));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

const UsersContainer = connect(mapStatetoProps, mapDispatchtoProps)(UsersContAPI);

export default UsersContainer;
