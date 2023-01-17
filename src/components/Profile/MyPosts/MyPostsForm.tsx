import React from 'react';
//@ts-ignore
import s from "./MyPosts.module.css";
//@ts-ignore
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../formsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validator/validator';

type PropsType = {
  handleSubmit: () => void
}

const MyPostsForm: React.FC<PropsType> = ({handleSubmit}) => {
  const maxLength50 = maxLengthCreator(50)
    return (
        <form className={s.addPost} onSubmit={handleSubmit}>
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