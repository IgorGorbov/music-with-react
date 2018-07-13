import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import user from '../middlewares/user';
import reducers from '../reducers';
import history from '../history';

let middleware;
if (process && process.env && process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(routerMiddleware(history), thunk, user);
} else {
  middleware = composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk, user),
  );
}
const store = createStore(reducers, middleware);

export default store;
