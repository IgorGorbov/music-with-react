// import { USER_LOGIN, ASYNC_VALIDATION_SUCCESS } from '../constants/ActionTypes';
//
// export default store => next => action => {
//   const { user, type, ...rest } = action;
//   if (!user) return next(action);
//
//   if (type === ASYNC_VALIDATION_SUCCESS) {
//     next({ ...rest, type: USER_LOGIN, payload: user });
//   }
// };
