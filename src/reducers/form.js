import {
  FORM_FIELD_CHANGE,
  FORM_VALIDATION,
  FORM_CLEAN,
} from '../constants/ActionTypes';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  error: null,
  isValid: false,
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
    case FORM_CLEAN:
      return initialState;
    default:
      return state;
  }
};
