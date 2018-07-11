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

export const getLikedTracks = state => {
  const { session } = state;
  return session.user ? session.user.likedTracks : [];
};

export const getLikedAlbums = state => {
  const { session } = state;
  return session.user ? session.user.likedAlbums : [];
};

export const getEntities = (state, entities) => {
  const search = item => {
    const searchName = item.name
      .toLowerCase()
      .includes(state.filters.search.toLowerCase());

    const searchPerformer = Array.isArray(item.performer)
      ? item.performer.some(p =>
          p.toLowerCase().includes(state.filters.search.toLowerCase()),
        )
      : item.performer
          .toLowerCase()
          .includes(state.filters.search.toLowerCase());

    return searchName || searchPerformer;
  };

  const filterByCategory = item => {
    const { category } = state.filters;
    if (category.length > 0 && item.genre) {
      const cat = item.genre.map(g => g.id);
      return state.filters.category.includes(...cat);
    }
    return true;
  };

  const filterByFavorite = item => {
    const { isFavoriteAlbums } = state.filters;
    if (isFavoriteAlbums && state.session.user) {
      const { likedAlbums } = state.session.user;
      return likedAlbums.includes(item.id);
    }
    return true;
  };

  return state[entities].items.filter(
    item => filterByCategory(item) && search(item) && filterByFavorite(item),
  );
};

export const getPlaylistItemsLength = state => state.playlist.items.length;

export const getCurrentIndex = state => state.player.playingIndex;

export const getNextUrl = (state, id) => {
  const { playlist } = state;
  return playlist.items.find(item => item.id === id).url;
};

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

export const getRepeat = state => state.player.repeat;

export const getShuffle = state => state.player.shuffle;

export const getPlaylist = state => state.playlist.items;

export const getShuffleIndex = state => {
  const playingIndex = getCurrentIndex(state);
  const playlistItemsLength = getPlaylistItemsLength(state);
  const playlist = getPlaylist(state);
  const randomIndex = Math.floor(Math.random() * playlistItemsLength);
  const shuffleIndex = playlist[randomIndex].id;

  if (playingIndex === shuffleIndex) {
    return getShuffleIndex(state);
  }

  return shuffleIndex;
};
