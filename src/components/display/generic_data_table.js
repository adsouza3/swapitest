import React from 'react';
import { connect } from 'react-redux';

import { startCase } from 'lodash'; 

export const GenericDataTable = ({ cache, data, keys }) => {
  return (
    <table>
      <tbody>
        {keys.map((key) => {
          let value = data[key];
          if (key === 'homeworld') {
            value = [value];
          }

          if (value instanceof Array) {
            let subNames = [];
            value.forEach((url) => {
              if (cache[url]) {
                subNames.push(cache[url].name || cache[url].title);
              }
            });

            if (subNames.length === value.length) {
              value = subNames.join(', ');
            } else {
              value = 'Loading...';
            }
          }
          return (
            <tr key={key}>
              <td>{startCase(key)}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ cache }) => {
  return { cache };
};

export default connect(mapStateToProps)(GenericDataTable);