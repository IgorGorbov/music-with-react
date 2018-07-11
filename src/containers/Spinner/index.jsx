import React from 'react';
import './style.css'

import Logo from '../Logo'

const Spinner = ({ type }) => {
    if (type === 'form')
        return (
            <div className="spinner">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
            </div>
    );
    else
        return (
            <div className="logo-spinner">
                <Logo  />
            </div>
        )
};

export default Spinner;


