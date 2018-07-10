import { combineReducers } from 'redux';
import session from './session';
import player from './player';
import filters from './filters';
import form from './form';
import albums from './albums';
import categories from './categories';

import playlist from './playlist';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  player,
  albums,
  categories,
  playlist,
  session,
  form,
  filters,
  routing: routerReducer,
});
