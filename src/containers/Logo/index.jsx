import React, {Fragment} from 'react';

import logo from './logo.svg';
import logoMain from './logoMain.svg';

import './style.css'

const Logo = () => (
    <div className={"logoContainer"}>
        <img className="logo" src={logo} alt="logo" />
        <img className="logoMain" src={logoMain} alt="logoMain" />
    </div>
);

export default Logo;
