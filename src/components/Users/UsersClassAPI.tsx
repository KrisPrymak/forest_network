import axios from "axios";
import React from "react";
import { UserType } from "../../types";
import Users from "./Users";

type PropsType = {
  setUsers: (users: Array<UserType>) => void
  setTotalUsersCount: (totalCount: number) => void
  setCurrentPage: (pageNumber: number) => void
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (id: number) => void
  follow: (id: number) => void
}

class UsersClassAPI extends React.Component<PropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  followingInProgress={this.props.followingInProgress}
    />
  }
}

export default UsersClassAPI;