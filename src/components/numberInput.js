import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  input: {
    padding: '10px',
    marginRight: '5px'
  },
  button: {
    padding: '10px'
  },
  container: {
    margin: '10px'
  }
};

const NumberInput = ({ onClick, onChange, onCountryCodeChange, onStartingDigitChange }) => (
    <div style={styles.container}>
      <input
          type="text"
          placeholder="Enter country code"
          onChange={onCountryCodeChange}
          style={styles.input}
      />
      <input
          type="number"
          placeholder="Enter starting digit"
          onChange={onStartingDigitChange}
          style={styles.input}
      />
      <input
          type="number"
          placeholder="Enter number only"
          onChange={onChange}
          style={styles.input}
      />
      <button
          style={styles.button}
          onClick={onClick}>
        Generate
      </button>
    </div>
);

NumberInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCountryCodeChange: PropTypes.func.isRequired,
  onStartingDigitChange: PropTypes.func.isRequired,
};

export default NumberInput;
