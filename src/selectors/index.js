import * as R from 'ramda';

export const getTypeForm = state => {
  return state.routing.location.pathname === '/user/login' ||
    state.routing.location.pathname === '/user/login/'
    ? 'Login'
    : 'Registration';
};

export const getPathForRedirect = state => {
  return state.routing.location.state
    ? state.routing.location.state.from.pathname
    : '/';
};

export const getAlbumById = (state, id) => {
  return state.albums.items.find(item => item.id === id);
};

export const getPlayingIndex = state => state.player.playingIndex;

export const getTrackById = (state, id) => R.prop(id, state.tracks);

export const getTracks = state => {
  const applySearch = item => {
    const isContains = param =>
      R.contains(
        R.toLower(state.tracksPage.search),
        R.toLower(R.prop(param, item)),
      );

    return isContains('name') || isContains('group');
  };
  const { user } = state;
  if (user.selectCategory === 'Favorite')
    return R.compose(
      R.filter(applySearch),
      R.map(id => getTrackById(state, id)),
    )(state.user.liked);

  return R.compose(
    R.filter(applySearch),
    R.map(id => getTrackById(state, id)),
  )(state.tracksPage.ids);
};

export const getRenderedTracksLength = state => R.length(state.tracksPage.ids);

export const getTrackUrl = state => {
  const trackId = R.path(['player', 'playingIndex'], state);
  return R.prop('src', getTrackById(state, trackId));
};

export const getCurrentIndex = state =>
  R.path(['player', 'playingIndex'], state);

export const getNextIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getRenderedTracksLength(state);
  const ids = R.values(state.tracksPage.ids);
  const nextId = R.indexOf(playingIndex, ids) + 1;

  return playingIndex === playlistItemsLength ? ids[0] : ids[nextId];
};

export const getPrevIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const ids = R.values(state.tracksPage.ids);
  const nextId = R.indexOf(playingIndex, ids) - 1;

  return playingIndex === ids[0] ? ids[0] : ids[nextId];
};

export const getRepeat = state => R.path(['player', 'repeat'], state);

export const getShuffle = state => R.path(['player', 'shuffle'], state);

export const isLikeTrack = (id, state) => R.contains(id, state.liked);

export const getShuffleIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getRenderedTracksLength(state);
  const randomIndex = Math.floor(Math.random() * (playlistItemsLength - 1));

  if (playingIndex === randomIndex) {
    return getShuffleIndex(state);
  }

  return randomIndex;
};
