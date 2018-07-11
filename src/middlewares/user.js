import {
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_START,
  USER_REGISTRATION_SUCCESS,
} from '../constants/ActionTypes';
import { postData } from '../api';
import { SERVER_USERS_URL } from '../constants/ApiConstants';

export default store => next => action => {
  const { payload, type } = action;
  if (type === USER_REGISTRATION_START) {
    try {
      postData(SERVER_USERS_URL, payload)
        .then(() => next({ type: USER_REGISTRATION_SUCCESS, payload }))
        .catch(e =>
          next({
            type: USER_REGISTRATION_ERROR,
            payload: e,
            error: true,
          }),
        );
    } catch (e) {
      next({
        type: USER_REGISTRATION_ERROR,
        payload: e,
        error: true,
      });
    }
  }

  return next(action);
};
