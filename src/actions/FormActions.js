import {
  FORM_FIELD_CHANGE,
  FORM_VALIDATION,
  FORM_CLEAN,
} from '../constants/ActionTypes';

export const formFieldChange = (field, value) => ({
  type: FORM_FIELD_CHANGE,
  payload: {
    field,
    value,
  },
});

export const formValidation = validation => ({
  type: FORM_VALIDATION,
  payload: validation,
});

export const formClean = () => ({
  type: FORM_CLEAN,
});
