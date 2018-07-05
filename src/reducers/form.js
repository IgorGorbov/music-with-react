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
      return {
        ...state,
        [payload.field]: payload.value,
      };
    case FORM_VALIDATION:
      return {
        ...state,
        error: payload.error,
        isValid: payload.isValid,
      };
    case ASYNC_VALIDATION_START:
      return {
        ...state,
        Loading: true,
      };
    case ASYNC_VALIDATION_SUCCESS:
      return {
        ...state,
        isAsyncValid: true,
        Loading: false,
      };
    case ASYNC_VALIDATION_ERROR:
      return {
        ...state,
        error: payload,
        isValid: false,
        isAsyncValid: false,
        Loading: false,
      };
    case CHANGE_TYPE_FORM:
      return {
        ...initialState,
        typeForm: payload,
      };
    case FORM_CLEAN:
      return initialState;
    default:
      return state;
  }
};
