import React from 'react';

import Title  from '../Title'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'
import Logo from '../Logo'

import './style.css'

const AuthenticationPage = props => {
    const { pathname } = props.location;
    const isLogin = pathname === '/user/login' || pathname ==='/user/login/';
    return (
        <div className="wrapper">
            <Logo/>
            <Title>Welcome to the music with React &#127911;</Title>
            {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

export default AuthenticationPage;
