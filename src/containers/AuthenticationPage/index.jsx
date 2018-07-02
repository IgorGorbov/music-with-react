import React from 'react';

import Title  from '../Title'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'
import Logo from '../Logo'



import './style.css'
import {userLogin} from "../../actions/UserActions";

const AuthenticationPage = props => {
    const { pathname } = props.location;
    const isLogin = pathname === '/user/login' || pathname ==='/user/login/';
    return (
        <div className="wrapper">
            <div className="animated rotateIn 3s">
                <Logo />
            </div>
            <Title>Welcome to the music with React &#127911;</Title>
            <div className="animated bounceInUp">
                {isLogin ? <LoginForm  /> : <RegisterForm />}
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    userLogin
};

export default AuthenticationPage;





