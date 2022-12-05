import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {

  let DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };

  let Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Kesha' id='1' />
        <DialogItem name='Lalka' id='2' />
        <DialogItem name='Musya' id='3' />
        <DialogItem name='Kiska' id='4' />
        <DialogItem name='Gosha' id='5' />
      </div>
      <div className={s.messages}>
        <Message message='hello, how are you' />
        <Message message='Yo yo yo' />
        <Message message='lalalal lolo' />
      </div>
    </div>
  );
};

export default Dialogs;
