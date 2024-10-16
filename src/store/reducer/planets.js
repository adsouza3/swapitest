
import { CACHE_ENTRIES, GET_PLANETS } from '../actions';

const reducer = (state = [], action) => {

  switch (action.type) {
  case GET_PLANETS:
    return action.results;
  case CACHE_ENTRIES:
    return state;
  default:
    return [];
  }
};

export default reducer;