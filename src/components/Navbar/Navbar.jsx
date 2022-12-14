import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  let activeItemClass = (navLink) => (navLink.isActive ? s.active : s.item);
  return (
    <nav className={s.navbar}>
      <div>
        <NavLink to="/profile" className={activeItemClass}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={activeItemClass}>
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={activeItemClass}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={activeItemClass}>
          Users
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={activeItemClass}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
