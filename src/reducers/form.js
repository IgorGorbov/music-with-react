import * as R from 'ramda';
import {
  FORM_FIELD_CHANGE,
  FORM_VALIDATION,
  CHANGE_TYPE_FORM,
  FORM_CLEAN,
  ASYNC_VALIDATION_START,
  ASYNC_VALIDATION_SUCCESS,
  ASYNC_VALIDATION_ERROR,
} from '../constants/ActionTypes';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  error: null,
  typeForm: 'Login',
  isValid: false,
  isAsyncValid: false,
  Loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FORM_FIELD_CHANGE:
      return R.assoc(payload.field, R.prop('value', payload), state);
    case FORM_VALIDATION:
      return R.compose(
        R.assoc('isValid', R.prop('isValid', payload)),
        R.assoc('error', R.prop('error', payload)),
      )(state);
    case ASYNC_VALIDATION_START:
      return R.assoc('Loading', true, state);
    case ASYNC_VALIDATION_SUCCESS:
      return R.compose(
        R.assoc('isAsyncValid', true),
        R.assoc('Loading', false),
      )(state);
    case ASYNC_VALIDATION_ERROR:
      return R.compose(
        R.assoc('error', payload),
        R.assoc('isValid', false),
        R.assoc('isAsyncValid', false),
        R.assoc('Loading', false),
      )(state);
    case CHANGE_TYPE_FORM:
      return R.assoc('typeForm', payload, initialState);
    case FORM_CLEAN:
      return initialState;
    default:
      return state;
  }
};
