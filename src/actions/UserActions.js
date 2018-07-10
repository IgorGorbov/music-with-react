import { USER_LOGIN, USER_LOGOUT } from '../constants/ActionTypes';

export const userLogin = user => ({
  type: USER_LOGIN,
  payload: user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
