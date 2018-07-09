import uid from 'uid';
import {
  USER_LOGIN,
  USER_REGISTRATION_SUCCESS,
  USER_LOGOUT,
  TOGGLE_LIKE_TRACK,
} from '../constants/ActionTypes';

const initialState = {
  user: {
    id: '1',
    name: 'Shemar',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leemunroe/128.jpg',
    likedTracks: [],
    likedAlbums: [],
    email: 'Maryam.Kuhlman@gmail.com',
    isAuthenticated: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
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
          likedTracks: [],
          likedAlbums: [],
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
    case TOGGLE_LIKE_TRACK:
      const isNewTrack = !state.user.likedTracks.includes(payload);
      return {
        ...state,
        user: {
          ...state.user,
          likedTracks: isNewTrack
            ? [...state.user.likedTracks, payload]
            : state.user.likedTracks.filter(
                likedTrackId => likedTrackId !== payload,
              ),
        },
      };
    default:
      return state;
  }
};
