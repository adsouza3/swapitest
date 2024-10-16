import api from '../../lib/api';

const basePath = 'https://swapi.dev/api/';

export const GET_PLANETS = 'GET_PLANETS';
export const getPlanets = search => {
  return async (dispatch, getState) => {
    const response = await api.get(`${basePath}/planets`, {
        params: { search }
    });

    dispatch({
      type: GET_PLANETS,
      results: response.data.results,
    });

    const subEntries = await getSubEntries(
      getState().cache,
      response.data.results,
      ['films', 'residents']
    );
    dispatch(cacheEntries(subEntries));
  };
};

export const GET_SPECIES = 'GET_SPECIES';
export const getSpecies = search => {
  return async (dispatch, getState) => {
    const response = await api.get(`${basePath}/species`, {
        params: { search }
    });

    dispatch({
      type: GET_SPECIES,
      results: response.data.results,
    });

    const subEntries = await getSubEntries(
      getState().cache,
      response.data.results,
      ['homeworld', 'films', 'people']
    );
    dispatch(cacheEntries(subEntries));
  };
};

export const GET_VEHICLES = 'GET_VEHICLES';
export const getVehicles = search => {
  return async (dispatch, getState) => {
    const response = await api.get(`${basePath}/vehicles`, {
        params: { search }
    });


    dispatch({
      type: GET_VEHICLES,
      results: response.data.results,
    });

    const subEntries = await getSubEntries(
      getState().cache,
      response.data.results,
      ['films', 'pilots']
    );
    dispatch(cacheEntries(subEntries));
  };
};

export const GET_STARSHIPS = 'GET_STARSHIPS';
export const getStarships = search => {
  return async (dispatch, getState) => {
    const response = await api.get(`${basePath}/starships`, {
        params: { search },
    });


    dispatch({
      type: GET_STARSHIPS,
      results: response.data.results,
    });

    const subEntries = await getSubEntries(
      getState().cache,
      response.data.results,
      ['films', 'pilots']
    );
    dispatch(cacheEntries(subEntries));
  };
};

export const GET_PEOPLE = 'GET_PEOPLE';
export const getPeople = search => {
  return async (dispatch, getState) => {
    const response = await api.get(`${basePath}/people`, {
        params: { search }
    });

    const results = response.data.results;

    dispatch({
      type: GET_PEOPLE,
      results,
    });

    const subEntries = await getSubEntries(
      getState().cache,
      results,
      ['homeworld', 'films', 'species', 'starships', 'vehicles']
    );

    dispatch(cacheEntries(subEntries));
  };
};

export const GET_FILMS = 'GET_FILMS';
export const getFilms = search => {
  return async (dispatch, getState) => {
    const response = await api.get(`${basePath}/films`, {
        params: { search }
    });

    dispatch({
      type: GET_FILMS,
      results: response.data.results,
    });

    const subEntries = await getSubEntries(
      getState().cache,
      response.data.results,
      ['characters', 'planets', 'species', 'starships', 'vehicles']
    );

    dispatch(cacheEntries(subEntries));
  };
};

const getSubEntries = async (cache, entries, keys) => {
  let urls = new Set();

  const addUrl = (url) => {
    if (!cache[url]) {
      urls.add(url)
    }
  };

  keys.forEach((key) => {
    entries.forEach((entry) => {
      if (entry[key] && (entry[key] instanceof Array)) {
        entry[key].forEach(addUrl);
      } else if (entry[key]) {
        addUrl(entry[key]);
      }
    });
  });

  let promises = [];
  urls.forEach(url => promises.push(api.get(url)));

  const results = await Promise.all(promises);
  return results.map(r => r.data);
};

export const CACHE_ENTRIES = 'CACHE_ENTRIES';
export const cacheEntries = (results) => {
  return {
    type: CACHE_ENTRIES,
    results: results,
  };
};