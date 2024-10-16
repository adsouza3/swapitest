
import { CACHE_ENTRIES, GET_VEHICLES } from '../actions';

const reducer = (state = [], action) => {

  switch (action.type) {
  case GET_VEHICLES:
    return action.results;
  case CACHE_ENTRIES:
    return state;
  default:
    return [];
  }
};

export default reducer;