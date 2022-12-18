import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
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
        {props.isAuth ? (
          <div>
            <span className={s.loginName}>{props.login}</span>
            <button className={s.loginCl} onClick={props.logout}>Logout</button>
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
