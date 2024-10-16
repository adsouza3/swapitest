import React from 'react';
import GenericDataTable from './generic_data_table';

export const Person = ({ person }) => {
  const { name, created, edited, url, ...details } = person;
  return <div className="person result-entry">
    <GenericDataTable data={person} keys={['name', ...Object.keys(details)]} />
  </div>;
};

export default Person;