import { combineReducers } from 'redux';
import user from './session';
import form from './form';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  user,
  form,
  routing: routerReducer,
});
