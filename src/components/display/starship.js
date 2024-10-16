import React from 'react';
import GenericDataTable from './generic_data_table';

export const Starship = ({ starship }) => {
  const { name, created, edited, url, ...details } = starship;
  return <div className="starship result-entry">
    <GenericDataTable data={starship} keys={['name', ...Object.keys(details)]} />
  </div>;
};

export default Starship;