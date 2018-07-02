import {
  USER_LOGIN_SUCCESS,
  USER_REGISTRATION_SUCCESS,
} from '../constants/ActionTypes';

export const userLogin = user => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const userRegistration = user => ({
  type: USER_REGISTRATION_SUCCESS,
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
