import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userAvatar from './../../assets/images/userAvatar.png';

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
          .then(response => {
            props.setUsers(response.data.items);
          })
  }

  return <div className={s.users}>{
    props.users.map((u) => (
      <div className={s.user}>
        <div className={s.left}>
          <img className={s.ava} src={u.photos.small ? u.photos.small : userAvatar} alt="ava" />
          <div>
          {u.followed ? (
            <button className={s.unfollow} onClick={() => {props.unfollow(u.id)}}>
              Удалить из друзей
            </button>
          ) : (
            <button className={s.follow} onClick={() => {props.follow(u.id)}}>
              Добавить в друзья
            </button>
          )}
          </div>
        </div>
        <div className={s.right}>
          <div className={s.userInfo}>
            <p className={s.name}>{u.name}</p>
            {/* <p
              className={s.location}
            >{`${u.location.city}, ${u.location.country}`}</p> */}
          </div>
          <p className={s.status}>{u.status ? u.status : 'hey, i dont have a status'}</p>
        </div>
      </div>
    ))
  }</div>;
};

export default Users;

// let usersArray = [
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