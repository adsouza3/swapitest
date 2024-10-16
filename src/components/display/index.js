import React from 'react';
import { connect } from 'react-redux';

import Film from './film';
import Person from './person';
import Planet from './planet';
import Species from './species';
import Starship from './starship';
import Vehicle from './vehicle';

export const Display = ({ films, people, planets, species, starships, vehicles }) => {
  
  return <div className="display-container">
    {films.map((film) => {
      return <Film key={species.name} film={film} />;
    })}
    {people.map((person) => {
      return <Person key={person.name} person={person} />;
    })}
    {planets.map((planet) => {
      return <Planet key={planet.name} planet={planet} />;
    })}
    {species.map((species) => {
      return <Species key={species.name} species={species} />;
    })}
    {starships.map((starship) => {
      return <Starship key={starship.name} starship={starship} />;
    })}
    {vehicles.map((vehicle) => {
      return <Vehicle key={vehicle.name} vehicle={vehicle} />;
    })}
  </div>;
};

const mapStateToProps = ({ films, people, planets, species, starships, vehicles }) => {
  return { films, people, planets, species, starships, vehicles };
};

export default connect(mapStateToProps)(Display);