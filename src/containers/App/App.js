import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import PrivateRoute from '../PrivateRoute';
import AuthenticationPage from '../AuthenticationPage';

import './style.scss';

const App = ({ user }) => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Home} user={user} />
      <Route exact path="/user/login" component={AuthenticationPage} />
      <Route exact path="/user/registration" component={AuthenticationPage} />
    </Switch>
  </Router>
);

const mapStateToProps = state => {
  const { user } = state;
  return {
    user,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
