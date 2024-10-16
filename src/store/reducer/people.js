
import { CACHE_ENTRIES, GET_PEOPLE } from '../actions';

const reducer = (state = [], action) => {

  switch (action.type) {
  case GET_PEOPLE:
    return action.results;
  case CACHE_ENTRIES:
    return state;
  default:
    return [];
  }
};

export default reducer;