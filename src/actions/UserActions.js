import { USER_LOGIN, USER_REGISTRATION } from '../constants/ActionTypes';

export const userLogin = user => ({
  type: USER_LOGIN,
  payload: user,
});

export const userRegistration = user => ({
  type: USER_REGISTRATION,
  payload: user,
});

// const fetchUserFollowings = id => async dispatch => {
//   const { json } = await callApi(USER_FOLLOWINGS_URL.replace(':id', id));
//   const { collection } = json;
//   const { entities, result } = normalize(collection, [userSchema]);
//
//   dispatch(
//     fetchUserFollowingsSuccess({
//       users: {
//         ...entities.users,
//         [id]: { followings: result },
//       },
//     }),
//   );
// };
