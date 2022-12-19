import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Navigate } from 'react-router-dom';
import s from './Login.module.css';


const Login = (props) => {

    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        <ul className={s.testAcc}>Тестовый аккаунт
            <li>Email: free@samuraijs.com</li>
            <li>Password: free</li>
        </ul>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);