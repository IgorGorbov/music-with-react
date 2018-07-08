import {
  ON_LOAD_START,
  PLAY_SONG,
  ON_PLAY,
  ON_PAUSE,
  LOAD_NEW_PLAYING_INDEX,
  ON_LOADED_METADATA,
  ON_TIME_UPDATE,
  ON_VOLUME_CHANGE,
  TOGGLE_VOLUME,
  SEARCH_TRACK,
  TOGGLE_REPEAT,
  TOGGLE_SHUFFLE,
  TOGGLE_LIKE_TRACK,
  SELECT_CATEGORY,
} from '../constants/ActionTypes';

import {
  getNextIndex,
  getPrevIndex,
  getRepeat,
  getShuffle,
  getShuffleIndex,
} from '../selectors';

export const playSong = playingIndex => ({
  type: PLAY_SONG,
  payload: playingIndex,
});

export const onLoadStart = () => ({
  type: ON_LOAD_START,
});

export const onPlay = () => ({
  type: ON_PLAY,
});

export const onPause = () => ({
  type: ON_PAUSE,
});

export const onPlayNewTrack = (trackId, trackSrc) => ({
  type: LOAD_NEW_PLAYING_INDEX,
  payload: {
    trackId,
    trackSrc,
  },
});

export const onLoadedMetadata = duration => ({
  type: ON_LOADED_METADATA,
  payload: duration,
});

export const onTimeUpdate = currentTime => ({
  type: ON_TIME_UPDATE,
  payload: currentTime,
});

export const onVolumeChange = (muted, volume) => ({
  type: ON_VOLUME_CHANGE,
  payload: {
    muted,
    volume,
  },
});

export const toggleVolume = () => ({
  type: TOGGLE_VOLUME,
});

export const playNextSong = (fromButtonPress = false) => (
  dispatch,
  getState,
) => {
  const state = getState();
  const nextIndex = getNextIndex(state);
  const repeat = getRepeat(state);
  const shuffle = getShuffle(state);

  if (shuffle) {
    const shuffleIndex = getShuffleIndex(state);
    dispatch(playSong(shuffleIndex));
  } else if (repeat) {
    dispatch(onTimeUpdate(0));
    dispatch(onPlay());
  } else if (nextIndex !== 0 || fromButtonPress) {
    dispatch(playSong(nextIndex));
  }
};

export const playNextSongFromButton = () => dispatch =>
  dispatch(playNextSong(true));

export const playPrevSong = () => (dispatch, getState) => {
  const state = getState();
  const currentIndex = state.player.playingIndex;
  const prevIndex = getPrevIndex(state);

  if (prevIndex !== currentIndex) dispatch(playSong(prevIndex));
};

export const searchTrack = text => ({
  type: SEARCH_TRACK,
  payload: text,
});

export const toggleRepeat = () => ({ type: TOGGLE_REPEAT });

export const toggleShuffle = () => ({ type: TOGGLE_SHUFFLE });

export const toggleLikeTrack = id => ({
  type: TOGGLE_LIKE_TRACK,
  payload: id,
});

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  payload: category,
});
