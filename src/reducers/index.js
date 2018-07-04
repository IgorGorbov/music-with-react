import { combineReducers } from 'redux';
import session from './session';
import form from './form';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  session,
  form,
  routing: routerReducer,
});
