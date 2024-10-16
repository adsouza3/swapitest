import { combineReducers, applyMiddleware, compose } from 'redux';
// import { thunk } from 'redux-thunk';

import cache from './cache';
import films from './films';
import people from './people';
import planets from './planets';
import species from './species';
import starships from './starships';
import vehicles from './vehicles';

// const enhancers = [applyMiddleware(thunk)];

// if (process.env.NODE_ENV !== 'production' || isDevModeEnabled()) {
//   enhancers.unshift(profileStore());
// };

const reducer = combineReducers({
  cache,
  films,
  people,
  planets,
  species,
  starships,
  vehicles,
});

export default reducer;

