import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  let dialogs = [ 
    {id: 1, name: 'Kesha'},
    {id: 2, name: 'Lalka'},
    {id: 3, name: 'Musya'},
    {id: 4, name: 'Kiska'},
    {id: 5, name: 'Gosha'},
  ]
 
  let messages = [
    {id: 1, message: 'hello, how are you'},
    {id: 1, message: 'Yo yo yo'},
    {id: 1, message: 'lalalal lolo'},
  ]

  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = messages.map(message => <Message message={message.message} />);

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
