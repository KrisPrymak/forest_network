import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messages.map(message => <Message message={message.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
