import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ min, max, total, phoneNumbers }) => (
    <div>
      {
        phoneNumbers.length > 0 &&
        <div>
          <h3>Stats</h3>
          <div>
            <div><strong>Min Phone number:</strong>{min}</div>
            <div><strong>Max Phone number:</strong>{max}</div>
            <div><strong>Total number of Phone numbers:</strong>{total}</div>
          </div>
        </div>
      }
    </div>
);

Statistics.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  total: PropTypes.number,
  phoneNumbers: PropTypes.array.isRequired,
};

export default Statistics;