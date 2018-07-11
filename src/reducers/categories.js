import { FETCH_CATEGORIES } from '../constants/ActionTypes';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_CATEGORIES}_SUCCESS`:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};
