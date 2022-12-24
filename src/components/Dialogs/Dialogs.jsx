import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import DialogsReduxForm from "./DialogsForm";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let addMessage = (values) => {
    props.sendMessage(values.newMessageBody)
    values.newMessageBody = '';
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messagesText}>{messagesElements}</div>
        <DialogsReduxForm
          onSubmit={addMessage}
        />
      </div>
    </div>
  );
};

export default Dialogs;
