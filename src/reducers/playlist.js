import * as R from 'ramda';
import { ON_SELECT_NEW_ALBUM } from '../constants/ActionTypes';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_SELECT_NEW_ALBUM:
      return R.assoc('items', payload, state);
    default:
      return state;
  }
};
