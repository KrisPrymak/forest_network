import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from "./Dialogs.module.css";
import {Textarea} from './../formsControls/FormsControls'
import { maxLengthCreator, required} from '../../utils/validator/validator';

const DialogsForm = (props) => {
  const maxLength50 = maxLengthCreator(50);
    return (
        <form className={s.addMessage} onSubmit={props.handleSubmit}>
          <div>
            <Field
            component={Textarea}
            name={'newMessageBody'}
            placeholder={'Enter you message...'}
            className={s.textarea}
            validate={[required, maxLength50]}
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