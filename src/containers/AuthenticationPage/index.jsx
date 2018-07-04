import React from 'react';

import Title  from '../Title'
import UserForm from '../UserFrom'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'
import Logo from '../Logo'

import {userLogin} from "../../actions/UserActions";

import './style.css'

const AuthenticationPage = props => {
    return (
        <div className="wrapper">
            <div className="animated rotateIn 3s">
                <Logo />
            </div>
            <Title>Welcome to the music with React &#127911;</Title>
            <UserForm />
        </div>
    );
};

const mapDispatchToProps = {
    userLogin
};

export default AuthenticationPage;





