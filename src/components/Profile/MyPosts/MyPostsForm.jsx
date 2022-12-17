import React from 'react';
import s from "./MyPosts.module.css";
import { Field, reduxForm } from 'redux-form';

const MyPostsForm = (props) => {
    return (
        <form className={s.addPost} onSubmit={props.handleSubmit}>
        <div>
          <Field 
          className={s.textarea}
          placeholder={'tell anything...'}
          name={'postText'}
          component={'textarea'} />
        </div>
        <div>
          <button className={s.button}>Add post</button>
        </div>
      </form>
    );
};

const MyPostsReduxForm = reduxForm({form: 'myposts'})(MyPostsForm);

export default MyPostsReduxForm;