import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import Home from '../Home';
//import PrivateRoute from '../PrivateRoute';
import AlbumPageContainer from '../AlbumPageContainer';
import AuthenticationPage from '../AuthenticationPage';

import history from '../../history';

import TopNavBar from '../../components/TopNavBar';
import PlayerContainer from '../PlayerContainer';

import './style.scss';
import PropTypes from 'prop-types';

const App = ({ user }) => {
  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <Route path="/" render={topNavBar} />
        <Switch>
          {/*<PrivateRoute exact path="/" component={Home} user={user} />*/}
          <Route exact path="/" component={Home} user={user} />
          <Route exact path="/albums/:id" component={AlbumPageContainer} />
          <Route exact path="/user/login" component={AuthenticationPage} />
          <Route
            exact
            path="/user/registration"
            component={AuthenticationPage}
          />
        </Switch>
        <PlayerContainer />
      </Fragment>
    </ConnectedRouter>
  );
};

const topNavBar = ({ location }) => {
  const { pathname } = location;
  return pathname.includes('/user/') ? null : <TopNavBar />;
};

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  session: state.session,
});

export default connect(
  mapStateToProps,
  null,
)(App);
