import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  span: {
    marginLeft: '10px'
  },
  container: {
    marginBottom: '20px'
  }
};

const Statistics = ({ min, max, total, phoneNumbers }) => (
    <div style={styles.container}>
      {
        phoneNumbers.length > 0 &&
        <div>
          <h3>Stats</h3>
          <div>
            <div><strong>Min Phone number:</strong><span style={styles.span}>{min}</span></div>
            <div><strong>Max Phone number:</strong><span style={styles.span}>{max}</span></div>
            <div><strong>Total number of Phone numbers:</strong><span style={styles.span}>{total}</span></div>
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