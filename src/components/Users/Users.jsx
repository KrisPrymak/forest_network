import React from "react";
import s from "./Users.module.css";
import userAvatar from "./../../assets/images/userAvatar.png";
import { NavLink } from "react-router-dom";
import statusImg from "./../../assets/images/statusimg.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (pages.length > 10) {
    let newPages = [...pages.slice(0, 5), "...", ...pages.slice(-5)];
    pages = newPages;
  }

  return (
    <div className={s.users}>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <span 
              className={props.currentPage === p && s.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div className={s.user}>
          <div className={s.left}>
            <NavLink to={"./../profile/" + u.id}>
              <img
                className={s.ava}
                src={u.photos.small ? u.photos.small : userAvatar}
                alt="ava"
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button disabled={props.followingInProgress.some(p => p === u.id)}
                  className={s.unfollow}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Отписка
                </button>
              ) : (
                <button disabled={props.followingInProgress.some(p => p === u.id)}
                  className={s.follow}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Подписаться
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
            <p className={s.status}>
              <img className={s.statusImg} src={statusImg} alt="statusImg" />
              {u.status ? u.status : "..."}
            </p>
          </div>
        </div>
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
