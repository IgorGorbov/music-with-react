import uid from 'uid';
import {
  USER_LOGIN,
  USER_REGISTRATION_SUCCESS,
  USER_LOGOUT,
  TOGGLE_LIKE_TRACK,
  TOGGLE_LIKE_ALBUM,
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
    case TOGGLE_LIKE_ALBUM:
      const isNewAlbum = !state.user.likedAlbums.includes(payload);
      return {
        ...state,
        user: {
          ...state.user,
          likedAlbums: isNewAlbum
            ? [...state.user.likedAlbums, payload]
            : state.user.likedAlbums.filter(
                likedAlbumId => likedAlbumId !== payload,
              ),
        },
      };
    default:
      return state;
  }
};
