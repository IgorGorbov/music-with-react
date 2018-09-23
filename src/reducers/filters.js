import * as R from 'ramda';
import {
  SEARCH,
  SELECT_CATEGORY,
  SELECT_FAVORITE_ALBUMS,
  GET_MORE_ALBUMS,
} from '../constants/ActionTypes';

const initialState = {
  search: '',
  category: [],
  countAlbums: 10,
  isFavoriteAlbums: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return R.assoc('search', payload, state);
    case SELECT_CATEGORY:
      const isNewCategory = R.compose(
        R.not,
        R.contains(payload),
        R.prop('category'),
      )(state);
      const category = isNewCategory
        ? [...R.prop('category', state), payload]
        : R.filter(cat => cat !== payload, R.prop('category', state));
      return R.assoc('category', category, state);
    case SELECT_FAVORITE_ALBUMS:
      return R.assoc(
        'isFavoriteAlbums',
        !R.prop('isFavoriteAlbums', state),
        state,
      );
    case GET_MORE_ALBUMS:
      return R.assoc(
        'countAlbums',
        R.prop('countAlbums', state) + payload,
        state,
      );
    default:
      return state;
  }
};
