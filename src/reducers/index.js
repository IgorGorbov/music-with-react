import { combineReducers } from 'redux';
import user from './session';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user,
  form: formReducer,
});
