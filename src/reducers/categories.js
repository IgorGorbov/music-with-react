import { FETCH_CATEGORIES } from '../constants/ActionTypes';
import * as R from 'ramda';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_CATEGORIES}_SUCCESS`:
      return R.assoc('items', payload, state);
    default:
      return state;
  }
};
