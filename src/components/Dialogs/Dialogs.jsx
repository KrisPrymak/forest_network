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

  let dialogsData = [ 
    {id: 1, name: 'Kesha'},
    {id: 2, name: 'Lalka'},
    {id: 3, name: 'Musya'},
    {id: 4, name: 'Kiska'},
    {id: 5, name: 'Gosha'},
  ]

  let messagesData = [
    {id: 1, message: 'hello, how are you'},
    {id: 1, message: 'Yo yo yo'},
    {id: 1, message: 'lalalal lolo'},
  ]

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
