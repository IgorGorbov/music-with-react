import uid from 'uid';
import {
  USER_LOGIN,
  USER_REGISTRATION,
  USER_LOGOUT,
} from '../constants/ActionTypes';

const initialState = {
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: Object.assign(payload, { isAuthenticated: true }),
      };
    }
    case USER_REGISTRATION: {
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
