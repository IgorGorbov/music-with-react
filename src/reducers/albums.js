import { FETCH_ALBUMS } from '../constants/ActionTypes';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_ALBUMS}_SUCCESS`:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};
