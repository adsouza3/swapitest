import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getFilms, getPeople, getPlanets, getSpecies, getStarships, getVehicles } from '../store/actions';

export const Controls = ({ getFilms, getPeople, getPlanets, getSpecies, getStarships, getVehicles }) => {
  const [search, setSearch] = useState('');

  return <div className="controls-container">
    <input
      value={search}
      onChange={({ target: { value } }) => setSearch(value)}
    />
    <button disabled={!search} onClick={() => getFilms(search)}>Search Films</button>
    <button disabled={!search} onClick={() => getPeople(search)}>Search People</button>
    <button disabled={!search} onClick={() => getPlanets(search)}>Search Planets</button>
    <button disabled={!search} onClick={() => getSpecies(search)}>Search Species</button>
    <button disabled={!search} onClick={() => getStarships(search)}>Search Starships</button>
    <button disabled={!search} onClick={() => getVehicles(search)}>Search Vehicles</button>
    </div>;
};

const mapDispatchTopProps = {
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
};

export default connect(null, mapDispatchTopProps)(Controls);