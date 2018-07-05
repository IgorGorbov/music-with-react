import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import Home from '../Home';
import PrivateRoute from '../PrivateRoute';
import AuthenticationPage from '../AuthenticationPage';

import history from '../../history';

import './style.scss';
import PropTypes from 'prop-types';

const App = ({ user }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} user={user} />
        <Route exact path="/user/login" component={AuthenticationPage} />
        <Route exact path="/user/registration" component={AuthenticationPage} />
      </Switch>
    </ConnectedRouter>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => state.session;

export default connect(
  mapStateToProps,
  null,
)(App);
