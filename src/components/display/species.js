import React from 'react';
import GenericDataTable from './generic_data_table';

export const Species = ({ species }) => {
  const { name, created, edited, url, ...details } = species;
  return <div className="species result-entry">
    <GenericDataTable data={species} keys={['name', ...Object.keys(details)]} />
  </div>;
};

export default Species;