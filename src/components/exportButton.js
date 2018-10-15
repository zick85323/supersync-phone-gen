import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    padding: '10px'
  }
};

const ExportButton = ({ phoneNumbers, onClick }) => (
    <div>
      {
        phoneNumbers.length > 0 &&
        <button
            style={styles.button}
            onClick={onClick}>
          Export Numbers
        </button>
      }
    </div>
);

ExportButton.propTypes = {
  phoneNumbers: PropTypes.array,
  onClick: PropTypes.func,
};

export default ExportButton;