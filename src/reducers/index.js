import { combineReducers } from 'redux';
import session from './session';
import form from './form';
import albums from './albums';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  albums,
  session,
  form,
  routing: routerReducer,
});
