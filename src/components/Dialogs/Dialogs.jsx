import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/store";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;


  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messagesText}>{messagesElements}</div>
        <div className={s.addMessage}>
          <div>
            <textarea
              className={s.textarea}
              onChange={onNewMessageChange}
              value={state.newMessageBody}
              placeholder='Enter you message...'
            />
          </div>
          <div>
            <button className={s.button} onClick={onSendMessageClick}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
