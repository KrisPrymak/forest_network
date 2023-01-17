import React from 'react';
//@ts-ignore
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
//@ts-ignore
import userAvatar from "./../../assets/images/userAvatar.png";
//@ts-ignore
import statusImg from "./../../assets/images/statusimg.png";
import { UserType } from '../../types';

type PropsType = {
  user: UserType
  followingInProgress: Array<Number>
  unfollow: (id: number) => void
  follow: (id: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.user}>
          <div className={s.left}>
            <NavLink to={"./../profile/" + user.id}>
              <img
                className={s.ava}
                src={user.photos.small ? user.photos.small : userAvatar}
                alt="ava"
              />
            </NavLink>
            <div>
              {user.followed ? (
                <button disabled={followingInProgress.some(p => p === user.id)}
                  className={s.unfollow}
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  Отписка
                </button>
              ) : (
                <button disabled={followingInProgress.some(p => p === user.id)}
                  className={s.follow}
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  Подписаться
                </button>
              )}
            </div>
          </div>
          <div className={s.right}>
            <div className={s.userInfo}>
              <p className={s.name}>{user.name}</p>
              {/* <p
                    className={s.location}
                    >{`${u.location.city}, ${u.location.country}`}</p> */}
            </div>
            <p className={s.status}>
              <img className={s.statusImg} src={statusImg} alt="statusImg" />
              {user.status ? user.status : "..."}
            </p>
          </div>
        </div>
    );
};

export default User;