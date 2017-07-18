import React from 'react';
import PropTypes from 'prop-types';
import './Test.scss';

const Test = ({ style, label }) => (
  <button className={style}>
    {label}
  </button>
);

Test.propTypes = {
  style: PropTypes.string,
  label: PropTypes.string,
};

Test.defaultProps = {
  style: 'medium',
  label: 'press',
};

export default Test;
