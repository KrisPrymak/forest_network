import React from "react";
//@ts-ignore
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<PropsType> = ({isAuth, login, logout}) => {
  return (
    <div className={s.header}>
      <NavLink to="/profile">
        <img
          className={s.icon}
          src="https://cdn-icons-png.flaticon.com/512/9115/9115806.png"
          alt="icon"
        />
      </NavLink>
      <ul className={s.colors}>
        <li>#FFFFFF</li>
        <li>#FB6376</li>
        <li>#F2DDDD</li>
        <li>#0197F6</li>
        <li>#000000</li>
      </ul>
      <div>
        {isAuth ? (
          <div>
            <span className={s.loginName}>{login}</span>
            <button className={s.loginCl} onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink className={s.loginCl} to={"/login"}>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
