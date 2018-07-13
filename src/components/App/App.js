import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import TopNavBarContainer from '../../containers/TopNavBarContainer/index';
import HomeContainer from '../../containers/HomeContainer/index';
import AlbumPageContainer from '../../containers/AlbumPageContainer/index';
import AuthenticationPage from '../AuthenticationPage/index';
import PlayerContainer from '../../containers/PlayerContainer/index';
import Page404 from '../Page404/index';

import history from '../../history/index';

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
