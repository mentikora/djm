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
  icon,
  title,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      title={title}
      className={
        cx(styles.btn, [className])
      }
      {...rest}
    >
      {icon ? <i className={icon} /> : children}
    </button>
  );
}

Button.propTypes = {
  className: string,
  type: string,
  onClick: func,
  icon: string,
  title: string
}

Button.defaultProps = {
  type: 'button',
  title: '',
}

export default Button;
