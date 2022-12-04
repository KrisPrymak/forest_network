import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Dialogs</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
