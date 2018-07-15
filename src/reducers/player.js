import * as R from 'ramda';
import {
  PLAY_SONG,
  ON_LOAD_START,
  ON_PLAY,
  ON_PAUSE,
  LOAD_NEW_PLAYING_INDEX,
  ON_LOADED_METADATA,
  ON_TIME_UPDATE,
  ON_VOLUME_CHANGE,
  TOGGLE_VOLUME,
  TOGGLE_REPEAT,
  TOGGLE_SHUFFLE,
} from '../constants/ActionTypes';

const initialState = {
  playingIndex: null,
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  muted: false,
  repeat: false,
  shuffle: false,
  volume: 1,
  trackUrl: '',
};

const player = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_SONG:
      return R.assoc('playingIndex', payload, state);
    case ON_LOAD_START:
      return R.merge(state, { duration: 0, currentTime: 0 });
    case ON_PLAY:
      return R.assoc('isPlaying', true, state);
    case ON_PAUSE:
      return R.assoc('isPlaying', false, state);
    case LOAD_NEW_PLAYING_INDEX:
      const isNewPlayingIndex =
        R.prop('playingIndex', state) !== R.prop('trackId', payload);
      return isNewPlayingIndex
        ? R.merge(state, {
            playingIndex: R.prop('trackId', payload),
            trackUrl: R.prop('trackSrc', payload),
          })
        : state;
    case ON_LOADED_METADATA:
      return R.assoc('duration', payload, state);
    case ON_TIME_UPDATE:
      return R.assoc('currentTime', payload, state);
    case ON_VOLUME_CHANGE:
      return R.merge(state, {
        muted: R.prop('muted', payload),
        volume: R.prop('volume', payload),
      });
    case TOGGLE_VOLUME:
      return R.assoc('muted', !R.prop('muted', state), state);
    case TOGGLE_REPEAT:
      return R.assoc('repeat', !R.prop('repeat', state), state);
    case TOGGLE_SHUFFLE:
      return R.assoc('shuffle', !R.prop('shuffle', state), state);
    default:
      return state;
  }
};

export default player;
