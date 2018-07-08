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
      return {
        ...state,
        playingIndex: payload,
      };
    case ON_LOAD_START:
      return {
        ...state,
        duration: 0,
        currentTime: 0,
      };
    case ON_PLAY:
      return {
        ...state,
        isPlaying: true,
      };
    case ON_PAUSE:
      return {
        ...state,
        isPlaying: false,
      };
    case LOAD_NEW_PLAYING_INDEX:
      const isNewPlayingIndex = state.playingIndex !== payload.trackId;
      return isNewPlayingIndex
        ? {
            ...state,
            playingIndex: payload.trackId,
            trackUrl: payload.trackSrc,
          }
        : state;
    case ON_LOADED_METADATA:
      return {
        ...state,
        duration: payload,
      };
    case ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: payload,
      };
    case ON_VOLUME_CHANGE:
      return {
        ...state,
        muted: payload.muted,
        volume: payload.volume,
      };
    case TOGGLE_VOLUME:
      return {
        ...state,
        muted: !state.muted,
      };
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat,
      };
    case TOGGLE_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle,
      };
    default:
      return state;
  }
};

export default player;
