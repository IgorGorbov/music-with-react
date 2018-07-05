import { fetchData } from '../api';
import { SERVER_ALBUMS_URL } from '../constants/ApiConstants';

export const fetchEntities = type => async dispatch => {
  dispatch({ type: `${type}_START` });

  try {
    const entities = await fetchData(SERVER_ALBUMS_URL);
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
