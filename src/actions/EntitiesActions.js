import {
  FETCH_ALBUMS_START,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_ERROR,
} from '../constants/ActionTypes';

import { fetchData } from '../api';
import { SERVER_USERS_URL } from '../constants/ApiConstants';

export const formAsyncValidation = () => async dispatch => {
  dispatch({ type: FETCH_ALBUMS_SUCCESS });

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
        dispatch({ type: USER_LOGIN, payload: currentUser });
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
