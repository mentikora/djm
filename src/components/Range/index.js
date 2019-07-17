import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './range.module.scss';

const { func, number, string } = PropTypes;

const Range = props => {
  const [value, handleRangeChange] = useState(100);
  const { min, max, icon } = props;
  const onChange = e => handleRangeChange(e.target.value);

  return (
    <div className={styles.range}>
      <div className={styles.rangeMarks}>
        <div className={styles.mark}>{min}</div>
        <div className={styles.mark}>
          <i className={icon} />
          <span>{value}</span>
        </div>
        <div className={styles.mark}>{max}</div>
      </div>
      <input
        min={min}
        max={max}
        type="range"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Range.propTypes = {
  onChange: func,
  min: number,
  max: number,
  icon: string,
}
Range.defaultProps = {
  min: 0,
  max: 100
}

export default Range;
