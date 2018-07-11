import React from 'react';

import logo from './logo.svg';
import logoMain from './logoMain.svg';

import './style.css'

const Logo = () => (
    <div className="logoContainer animated rotateIn 3s">
        <img className="logo" src={logo} alt="logo" />
        <img className="logoMain" src={logoMain} alt="logoMain" />
    </div>
);

export default Logo;
