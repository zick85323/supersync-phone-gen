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

const NumberInput = ({ onClick, onChange }) => (
    <div style={styles.container}>
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
};

export default NumberInput;