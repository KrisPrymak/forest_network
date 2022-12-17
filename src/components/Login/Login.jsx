import React from 'react';
import LoginReduxForm from './LoginForm';


const Login = (props) => {

    const onSubmit = (values) => {
        alert('Авторизация с логином: ' + values.login)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;