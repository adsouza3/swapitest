
import { CACHE_ENTRIES, GET_STARSHIPS } from '../actions';

const reducer = (state = [], action) => {

  switch (action.type) {
  case GET_STARSHIPS:
    return action.results;
  case CACHE_ENTRIES:
    return state;
  default:
    return [];
  }
};

export default reducer;