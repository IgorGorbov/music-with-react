import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "../Home";
import SignUser from "../SignUser";

import "./style.scss";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in" component={SignUser} />
      <Route exact path="/sign-up" component={SignUser} />
    </Switch>
  </Router>
);

export default App;
