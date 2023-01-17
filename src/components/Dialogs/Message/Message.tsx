import React from "react";
//@ts-ignore
import s from './Message.module.css'

type PropsType = {
  message: string
}

const Message: React.FC<PropsType> = ({message}) => {
  return <div className={s.message}>{message}</div>;
};

export default Message;
