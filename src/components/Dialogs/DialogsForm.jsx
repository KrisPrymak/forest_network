import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from "./Dialogs.module.css";

const DialogsForm = (props) => {
    
    return (
        <form className={s.addMessage} onSubmit={props.handleSubmit}>
          <div>
            <Field
            component={'textarea'}
            name={'newMessageBody'}
            placeholder={'Enter you message...'}
            className={s.textarea}
            />
          </div>
          <div>
            <button className={s.button}>
              Send message
            </button>
          </div>
        </form>
    );
};

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default DialogsReduxForm;