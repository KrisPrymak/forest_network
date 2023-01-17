import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
//@ts-ignore
import s from "./Dialogs.module.css";
import DialogsReduxForm from "./DialogsForm";
import { InitialStateDialogsType } from "../../Redux/dialogsReducer";

type PropsType = {
  dialogsPage: InitialStateDialogsType
  sendMessage: (text: string) => void
}

type newMessValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<PropsType> = ({dialogsPage, sendMessage}) => {
  let dialogsElements = dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  let messagesElements = dialogsPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let addMessage = (values: newMessValuesType) => {
    sendMessage(values.newMessageBody)
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
