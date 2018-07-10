import {
  SEARCH,
  SELECT_CATEGORY,
  SELECT_FAVORITE_ALBUMS,
} from '../constants/ActionTypes';

const initialState = {
  search: '',
  category: [],
  isFavoriteAlbums: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SELECT_CATEGORY:
      const isNewCategory = !state.category.includes(payload);
      return {
        ...state,
        category: isNewCategory
          ? [...state.category, payload]
          : state.category.filter(cat => cat !== payload),
      };
    case SELECT_FAVORITE_ALBUMS:
      return {
        ...state,
        isFavoriteAlbums: !state.isFavoriteAlbums,
      };
    default:
      return state;
  }
};
