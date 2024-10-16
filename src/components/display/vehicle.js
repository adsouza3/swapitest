import React from 'react';
import GenericDataTable from './generic_data_table';

export const Vehicle = ({ vehicle }) => {
  const { name, created, edited, url, ...details } = vehicle;
  return <div className="vehicle result-entry">
    <GenericDataTable data={vehicle} keys={['name', ...Object.keys(details)]} />
  </div>;
};

export default Vehicle;