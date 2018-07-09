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

export const getCurrentTrack = (state, playingIndex) => {
  return state.playlist.items.find(track => track.id === playingIndex);
};

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

export const getPlaylistItemsLength = state => state.playlist.items.length;

export const getTrackUrl = state => {
  const trackId = R.path(['player', 'playingIndex'], state);
  return R.prop('src', getTrackById(state, trackId));
};

export const getCurrentIndex = state => state.player.playingIndex;

export const getNextIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state) - 1;
  const tracksIds = state.playlist.items.reduce(
    (ids, item) => [...ids, item.id],
    [],
  );

  const currentId = tracksIds.indexOf(playingIndex);
  const nextId = currentId + 1;

  return currentId === playlistItemsLength ? tracksIds[0] : tracksIds[nextId];
};

export const getPrevIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state) - 1;
  const tracksIds = state.playlist.items.reduce(
    (ids, item) => [...ids, item.id],
    [],
  );

  const currentId = tracksIds.indexOf(playingIndex);
  const prevtId = currentId - 1;

  return currentId === 0 ? tracksIds[playlistItemsLength] : tracksIds[prevtId];
};

export const getRepeat = state => R.path(['player', 'repeat'], state);

export const getShuffle = state => R.path(['player', 'shuffle'], state);

export const isLikeTrack = (id, state) => R.contains(id, state.liked);

export const getShuffleIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state);
  const randomIndex = Math.floor(Math.random() * (playlistItemsLength - 1));

  if (playingIndex === randomIndex) {
    return getShuffleIndex(state);
  }

  return randomIndex;
};
