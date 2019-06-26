import React from 'react';
import PropTypes from 'prop-types';
import styles from './range.module.scss';

const { func, number } = PropTypes;

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
    max: number
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
    const { min, max } = this.props;

    return (
      <div className={styles.range}>
        {value}
        <hr/>
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
