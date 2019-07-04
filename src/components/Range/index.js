import React from 'react';
import PropTypes from 'prop-types';
import styles from './range.module.scss';

const { func, number, string } = PropTypes;

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    }
  }
  static propTypes = {
    onChange: func,
    min: number,
    max: number,
    icon: string,
  }
  static defaultProps = {
    min: 0,
    max: 100
  }

  handleRangeChange(event) {
    const rangeValue = event.target.value;
    this.setState({
      value: rangeValue
    })
    this.props.onChange(this.state.value);
  }

  render() {
    const { value } = this.state;
    const { min, max, icon } = this.props;

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
          onChange={this.handleRangeChange.bind(this)}
        />
      </div>
    );
  }
}

export default Range;
