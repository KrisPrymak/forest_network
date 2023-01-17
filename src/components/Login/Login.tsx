import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Navigate } from 'react-router-dom';
//@ts-ignore
import s from './Login.module.css';
import { AppStateType } from '../../Redux/reduxStore';

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

type formDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login: React.FC<PropsType> = ({login, isAuth}) => {

    const onSubmit = (formData: formDataType) => {
       login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
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

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);