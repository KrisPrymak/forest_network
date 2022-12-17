import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'login'} placeholder={'login'} />
            <Field component={'input'} name={'password'} placeholder={'password'} />
            <div>
            <Field component={'input'}  type={'checkbox'} name={'Rememberme'} /> remember me
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default LoginReduxForm;