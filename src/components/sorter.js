import React from 'react';
import PropTypes from 'prop-types';

const Sorter = ({ phoneNumbers, onChange }) => (
    <div>
      {
        phoneNumbers.length > 0 &&
        <div>
          <span>sort by</span>
          <select onChange={onChange}>
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