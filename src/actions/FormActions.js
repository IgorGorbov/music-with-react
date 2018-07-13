import {
  FORM_FIELD_CHANGE,
  FORM_VALIDATION,
  CHANGE_TYPE_FORM,
  FORM_CLEAN,
  ASYNC_VALIDATION_START,
  ASYNC_VALIDATION_SUCCESS,
  ASYNC_VALIDATION_ERROR,
  USER_REGISTRATION_START,
} from '../constants/ActionTypes';

import { fetchData } from '../api';
import { SERVER_USERS_URL } from '../constants/ApiConstants';
import { FORM_LOGIN } from '../constants/Validate';
import { userLogin } from './UserActions';

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

export const changeTypeForm = typeForm => ({
  type: CHANGE_TYPE_FORM,
  payload: typeForm,
});

export const formClean = () => ({
  type: FORM_CLEAN,
});

export const formAsyncValidation = () => async (dispatch, getState) => {
  dispatch({ type: ASYNC_VALIDATION_START });

  const { form } = getState();
  const { name, email, password, typeForm } = form;

  try {
    const users = await fetchData(SERVER_USERS_URL);
    const currentUser = users.find(user => user.email === email);

    if (typeForm === FORM_LOGIN) {
      const isValidate = currentUser
        ? currentUser.password === password
        : false;

      if (isValidate) {
        dispatch({ type: ASYNC_VALIDATION_SUCCESS });
        dispatch(userLogin(currentUser));
      } else {
        const error = { fromServer: 'Incorrect email or password' };
        dispatch({ type: ASYNC_VALIDATION_ERROR, payload: error });
      }
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      const isValidate = currentUser === undefined || currentUser === null;

      if (isValidate) {
        dispatch({ type: ASYNC_VALIDATION_SUCCESS });
        dispatch({ type: USER_REGISTRATION_START, payload: newUser });
      } else {
        const error = { fromServer: 'Email is invalid or already taken' };
        dispatch({ type: ASYNC_VALIDATION_ERROR, payload: error });
      }
    }
  } catch (e) {
    const error = { fromServer: 'Sorry, unknown error :( Repeat request' };
    dispatch({
      type: ASYNC_VALIDATION_ERROR,
      payload: error,
      error: true,
    });
  }
};
