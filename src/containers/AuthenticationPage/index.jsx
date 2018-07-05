import React from 'react';

import Title  from '../Title'
import UserForm from '../UserForm'
import Logo from '../Logo'

import './style.css'

const AuthenticationPage = () => {
    return (
        <div className="wrapper">
            <Logo />
            <Title>
                <p>Welcome to the music with React
                    <span role="img" aria-label="music">&#127911;</span>
                </p>
            </Title>
            <UserForm />
        </div>
    );
};

export default AuthenticationPage;







