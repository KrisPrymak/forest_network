import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Kesha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Lalka</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Musya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Kiska</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Gosha</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>hello, how are you</div>
        <div className={s.message}>Yo yo yo</div>
        <div className={s.message}>lalalal lolo</div>
      </div>
    </div>
  );
};

export default Dialogs;
