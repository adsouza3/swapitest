import React from 'react';
import GenericDataTable from './generic_data_table';

export const Film = ({ film }) => {
  const { name, created, edited, url, ...details } = film;
  return <div className="film result-entry">
    <GenericDataTable data={film} keys={['name', ...Object.keys(details)]} />
  </div>;
};

export default Film;