
import { CACHE_ENTRIES, GET_SPECIES } from '../actions';

const reducer = (state = [], action) => {

  switch (action.type) {
  case GET_SPECIES:
    return action.results;
  case CACHE_ENTRIES:
    return state;
  default:
    return [];
  }
};

export default reducer;