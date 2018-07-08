import { combineReducers } from 'redux';
import session from './session';
import player from './player';
import form from './form';
import albums from './albums';
import playlist from './playlist';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  player,
  albums,
  playlist,
  session,
  form,
  routing: routerReducer,
});
