
import { CACHE_ENTRIES, GET_FILMS } from '../actions';

const reducer = (state = [], action) => {

  switch (action.type) {
  case GET_FILMS:
    return action.results;
  case CACHE_ENTRIES:
    return state;
  default:
    return [];
  }
};

export default reducer;