
import * as actions from '../actions';

const reducer = (state = {}, action) => {

  switch (action.type) {
  case actions.CACHE_ENTRIES:
  case actions.GET_FILMS:
  case actions.GET_PEOPLE:
  case actions.GET_PLANETS:
  case actions.GET_SPECIES:
  case actions.GET_STARSHIPS:
  case actions.GET_VEHICLES:
    const entries = {};
    action.results.forEach(r => entries[r.url] = r);
    return {
      ...state,
      ...entries,
    };
  default:
    return state;
  }
};

export default reducer;