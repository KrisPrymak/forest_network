import React from "react";
//@ts-ignore
import s from './DialogItem.module.css';
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<PropsType> = ({id, name}) => {
  let path = "/dialogs/" + id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
