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
    case GET_MORE_ALBUMS:
      return {
        ...state,
        countAlbums: state.countAlbums + payload,
      };

    default:
      return state;
  }
};
