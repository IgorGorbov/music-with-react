import { fetchData } from '../api';
import {
  SEARCH,
  SELECT_CATEGORY,
  SELECT_FAVORITE_ALBUMS,
  GET_MORE_ALBUMS,
} from '../constants/ActionTypes';

export const fetchEntities = (type, url) => async dispatch => {
  dispatch({ type: `${type}_START` });

  try {
    const entities = await fetchData(url);
    dispatch({
      type: `${type}_SUCCESS`,
      payload: entities,
    });
  } catch (e) {
    dispatch({
      type: `${type}_FAILURE`,
      payload: e,
      error: true,
    });
  }
};

export const search = text => ({
  type: SEARCH,
  payload: text,
});

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const selectFavoriteAlbums = () => ({
  type: SELECT_FAVORITE_ALBUMS,
});

export const getMoreAlbums = count => ({
  type: GET_MORE_ALBUMS,
  payload: count,
});
