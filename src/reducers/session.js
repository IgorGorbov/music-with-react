import * as R from 'ramda';
import uid from 'uid';
import {
  USER_LOGIN,
  USER_REGISTRATION_SUCCESS,
  USER_LOGOUT,
  TOGGLE_LIKE_TRACK,
  TOGGLE_LIKE_ALBUM,
} from '../constants/ActionTypes';
import { DEFAULT_URL_IMG_AVATAR } from '../constants/User';

// const initialState = {
//   user: null,
// };
const initialState = {
  user: {
    id: '2',
    name: 'Teresa',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/itsajimithing/128.jpg',
    likedTracks: [],
    likedAlbums: [],
    email: 'Thalia.Collier@hotmail.com',
    isAuthenticated: true,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return R.assoc(
        'user',
        R.merge(payload, { isAuthenticated: true }),
        state,
      );
    }
    case USER_REGISTRATION_SUCCESS: {
      return R.assoc(
        'user',
        R.merge(payload, {
          id: uid(10),
          avatar: DEFAULT_URL_IMG_AVATAR,
          likedTracks: [],
          likedAlbums: [],
          isAuthenticated: true,
        }),
        state,
      );
    }
    case USER_LOGOUT: {
      return R.assoc('user', null, state);
    }
    case TOGGLE_LIKE_TRACK:
      const isNewTrack = !R.contains(
        payload,
        R.path(['user', 'likedTracks'], state),
      );
      const userLikedTracks = R.path(['user', 'likedTracks'], state);
      const likedTracksList = isNewTrack
        ? R.append(payload, userLikedTracks)
        : R.filter(trackId => trackId !== payload, userLikedTracks);

      return R.assoc(
        'user',
        R.merge(R.prop('user', state), { likedTracks: likedTracksList }),
        state,
      );
    case TOGGLE_LIKE_ALBUM:
      const isNewAlbum = !R.contains(
        payload,
        R.path(['user', 'likedAlbums'], state),
      );
      const userLikedAlbums = R.path(['user', 'likedAlbums'], state);
      const likedAlbumsList = isNewAlbum
        ? R.append(payload, userLikedAlbums)
        : R.filter(trackId => trackId !== payload, userLikedAlbums);

      return R.assoc(
        'user',
        R.merge(R.prop('user', state), { likedAlbums: likedAlbumsList }),
        state,
      );
    default:
      return state;
  }
};
