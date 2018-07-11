import { ON_SELECT_NEW_ALBUM } from '../constants/ActionTypes';

export const onSelectNewAlbum = album => ({
  type: ON_SELECT_NEW_ALBUM,
  payload: album,
});
