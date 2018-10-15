import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  field: {
    padding: '10px',
    fontSize: '15px'
  },
  text: {
    fontSize: '15px',
    margin: '10px'
  },
  container: {
    marginTop: '15px'
  }
};

const Sorter = ({ phoneNumbers, onChange }) => (
    <div style={styles.container}>
      {
        phoneNumbers.length > 0 &&
        <div>
          <span style={styles.text}><strong>Sort by:</strong></span>
          <select onChange={onChange} style={styles.field}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      }
    </div>
);

Sorter.propTypes = {
  phoneNumbers: PropTypes.array,
  onChange: PropTypes.func,
};

export default Sorter;