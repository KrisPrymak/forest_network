import React from 'react';
import s from "./MyPosts.module.css";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../formsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validator/validator';

const MyPostsForm = (props) => {
  const maxLength50 = maxLengthCreator(50)
    return (
        <form className={s.addPost} onSubmit={props.handleSubmit}>
        <div>
          <Field 
          className={s.textarea}
          placeholder={'tell anything...'}
          name={'postText'}
          component={Textarea}
          validate={[required, maxLength50]} />
        </div>
        <div>
          <button className={s.button}>Add post</button>
        </div>
      </form>
    );
};

const MyPostsReduxForm = reduxForm({form: 'myposts'})(MyPostsForm);

export default MyPostsReduxForm;