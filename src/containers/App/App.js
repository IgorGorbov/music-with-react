import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import AuthenticationPage from '../AuthenticationPage';

import './style.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user/login" component={AuthenticationPage} />
      <Route exact path="/user/registration" component={AuthenticationPage} />
    </Switch>
  </Router>
);

export default App;
