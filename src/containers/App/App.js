import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import TopNavBarContainer from '../../containers/TopNavBarContainer';
import HomeContainer from '../HomeContainer';
import AlbumPageContainer from '../AlbumPageContainer';
import AuthenticationPage from '../AuthenticationPage';
import PlayerContainer from '../PlayerContainer';
import Page404 from '../Page404';

import history from '../../history';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <TopNavBarContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/albums/:id" component={AlbumPageContainer} />
          <Route exact path="/user/login" component={AuthenticationPage} />
          <Route
            exact
            path="/user/registration"
            component={AuthenticationPage}
          />
          <Route component={Page404} />
        </Switch>
        <PlayerContainer />
      </Fragment>
    </ConnectedRouter>
  );
};

export default App;
