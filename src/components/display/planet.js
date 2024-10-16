import React from 'react';
import GenericDataTable from './generic_data_table';

export const Planet = ({ planet }) => {
  const { name, created, edited, url, ...details } = planet;
  return <div className="planet result-entry">
    <GenericDataTable data={planet} keys={['name', ...Object.keys(details)]} />
  </div>;
};

export default Planet;