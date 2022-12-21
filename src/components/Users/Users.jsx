import React from "react";
import s from "./Users.module.css";
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

  return (
    <div className={s.users}>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
      
      {props.users.map((u) => (
        <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow}/>
      ))}

      <div>Total accounts: {props.totalUsersCount}</div>
    </div>
  );
};

export default Users;

// let hardcoreInitialUsers = [
//   {
//     id: 1,
//     photoUrl: "https://cdn-icons-png.flaticon.com/512/8055/8055943.png",
//     followed: true,
//     fullName: "Alice Crown",
//     status: "i am an artist",
//     location: { city: "Paris", country: "France" },
//   },
//   {
//     id: 2,
//     photoUrl: "https://cdn-icons-png.flaticon.com/512/8055/8055927.png",
//     followed: false,
//     fullName: "Maxime Lambert",
//     status: "love travels",
//     location: { city: "Brussels", country: "Belgium" },
//   },
//   {
//     id: 3,
//     photoUrl: "https://cdn-icons-png.flaticon.com/512/8055/8055961.png",
//     followed: false,
//     fullName: "Ana Garcia",
//     status: "I have a food blog",
//     location: { city: "Madrid", country: "Spain" },
//   },
//   {
//     id: 4,
//     photoUrl: "https://cdn-icons-png.flaticon.com/512/3231/3231399.png",
//     followed: true,
//     fullName: "Hoshino Yutaka",
//     status: "Hello, i am Hoshino from Tokio",
//     location: { city: "Tokio", country: "Japan" },
//   },
// ]
