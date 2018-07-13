import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title/index';
import UserForm from '../../containers/UserForm/index';
import Logo from '../Logo/index';

import './style.css';

const AuthenticationPage = () => {
  return (
    <div className="wrapper">
      <div className="logo-link">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Title>
        <p>
          Welcome to the music with React
          <span role="img" aria-label="music">
            &nbsp;&#127911;
          </span>
        </p>
      </Title>
      <UserForm />
    </div>
  );
};

export default AuthenticationPage;
