import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './button.module.scss';

const { string, func } = PropTypes;

const Button = ({
  className,
  type,
  action,
  children,
  onClick,
  disabled,
  ...props,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={
        cx(styles.btn, [className])
      }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: string,
  type: string,
  onClick: func,
}

Button.defaultProps = {
  type: 'button'
}

export default Button;
