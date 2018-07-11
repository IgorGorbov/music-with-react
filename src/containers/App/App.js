import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import history from '../../history';

import Home from '../Home';
//import PrivateRoute from '../PrivateRoute';
import AlbumPageContainer from '../AlbumPageContainer';
import AuthenticationPage from '../AuthenticationPage';
import TopNavBarContainer from '../../containers/TopNavBarContainer';
import PlayerContainer from '../PlayerContainer';

const App = ({ user }) => {
  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <Route path="/" component={TopNavBarContainer} />
        <Switch>
          {/*<PrivateRoute exact path="/" component={Home} user={user} />*/}
          <Route exact path="/" component={Home} user={user} /> TODO убрать user
          <Route exact path="/albums/:id" component={AlbumPageContainer} />
          <Route exact path="/user/albums" component={AuthenticationPage} />
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
