import { connect } from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC} from './../../Redux/usersReducer'

let mapStatetoProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (usersArray) => {
      dispatch(setUsersAC(usersArray))
  },
  };
};

const UsersContainer = connect(mapStatetoProps, mapDispatchtoProps)(Users);

export default UsersContainer;
