import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getPathname = state =>
  R.path(['routing', 'location', 'pathname'], state);

export const getTypeForm = createSelector(
  getPathname,
  pathname =>
    R.equals(pathname, '/user/login') || R.equals(pathname, '/user/login/')
      ? 'Login'
      : 'Registration',
);

export const getPathForRedirect = state => {
  return R.ifElse(
    R.path(['routing', 'location', 'state']),
    R.path(['routing', 'location', 'state', 'from', 'pathname']),
    R.always('/'),
  )(state);
};

export const getAlbums = state => R.path(['albums', 'items'], state);

export const getAlbumById = createSelector(
  getAlbums,
  (state, id) => +id,
  (albums, id) => R.find(R.propEq('id', id))(albums),
);

export const getPlayingIndex = state =>
  R.path(['player', 'playingIndex'], state);

export const getPlaylist = state => R.path(['playlist', 'items'], state);

export const getTrack = state => R.prop('track', state);

export const getCurrentTrack = createSelector(
  getPlayingIndex,
  getPlaylist,
  getTrack,
  (playingIndex, playlist, track) => {
    const currentTrack = R.find(R.propEq('id', playingIndex))(playlist);
    return currentTrack ? currentTrack : track;
  },
);

export const getLiked = (state, entities) =>
  R.ifElse(
    R.path(['session', 'user']),
    R.path(['session', 'user', entities]),
    R.always([]),
  )(state);

export const getEntities = (state, entities) => {
  const search = item => {
    const itemName = R.toLower(R.prop('name', item));
    const searchValue = R.toLower(R.path(['filters', 'search'], state));
    const searchName = R.contains(searchValue, itemName);

    const itemPerformer = R.prop('performer', item);
    const searchPerformer = R.ifElse(
      R.is(Array),
      R.any(item => R.contains(searchValue, R.toLower(item))),
      R.contains(searchValue),
    )(itemPerformer);

    return searchName || searchPerformer;
  };

  const filterByCategory = item => {
    const category = R.path(['filters', 'category'], state);
    if (category.length > 0 && item.genre) {
      const itemGenre = R.map(g => g.id, R.prop('genre', item));
      return R.contains(...itemGenre, R.path(['filters', 'category'], state));
    }
    return true;
  };

  const filterByFavorite = item => {
    const isFavoriteAlbums = R.path(['filters', 'isFavoriteAlbums'], state);
    if (isFavoriteAlbums && R.path(['session', 'user'], state)) {
      const likedAlbums = R.path(['session', 'user', 'likedAlbums'], state);
      return R.contains(R.prop('id', item), likedAlbums);
    }
    return true;
  };

  const items = R.path([entities, 'items'], state);
  return R.filter(
    item => search(item) && filterByCategory(item) && filterByFavorite(item),
    items,
  );
};

export const getCountAlbums = (albums, count) => R.slice(0, count, albums);

export const getPlaylistItemsLength = state =>
  R.compose(
    R.length,
    R.path(['playlist', 'items']),
  )(state);

export const getAlbumsLength = state =>
  R.compose(
    R.length,
    R.path(['albums', 'items']),
  )(state);

export const getCurrentIndex = state =>
  R.path(['player', 'playingIndex'], state);

export const getNextUrl = (state, id) => {
  const playlist = R.path(['playlist', 'items'], state);
  return R.compose(
    R.prop('url'),
    R.find(item => R.equals(item.id, id)),
  )(playlist);
};

export const getNextIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state) - 1;
  const tracksIds = R.reduce(
    (ids, item) => [...ids, item.id],
    [],
    R.path(['playlist', 'items'], state),
  );

  const currentId = R.indexOf(playingIndex, tracksIds);
  const nextId = currentId + 1;
  return currentId === playlistItemsLength ? tracksIds[0] : tracksIds[nextId];
};

export const getPrevIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state) - 1;
  const tracksIds = R.reduce(
    (ids, item) => [...ids, item.id],
    [],
    R.path(['playlist', 'items'], state),
  );

  const currentId = R.indexOf(playingIndex, tracksIds);
  const prevId = currentId - 1;
  return currentId === 0 ? tracksIds[playlistItemsLength] : tracksIds[prevId];
};

export const getRepeat = state => R.path(['player', 'repeat'], state);

export const getShuffle = state => R.path(['player', 'shuffle'], state);

export const getShuffleIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state);
  const playlist = getPlaylist(state);
  const randomIndex = Math.floor(Math.random() * playlistItemsLength);
  const shuffleIndex = R.path([randomIndex, 'id'], playlist);

  if (playingIndex === shuffleIndex) {
    return getShuffleIndex(state);
  }

  return shuffleIndex;
};
