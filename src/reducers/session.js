import uid from 'uid';
import {
  USER_LOGIN_SUCCESS,
  USER_REGISTRATION_SUCCESS,
  USER_LOGOUT,
} from '../constants/ActionTypes';

const initialState = {
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        user: Object.assign(payload, { isAuthenticated: true }),
      };
    }
    case USER_REGISTRATION_SUCCESS: {
      return {
        ...state,
        user: Object.assign(payload, {
          id: uid(10),
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg',
          likedTrack: [],
          likedAlbum: [],
          isAuthenticated: true,
        }),
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
