import React from 'react';
import cx from 'classnames';
import styles from './button.module.scss';

const Button = ({
  className,
  type,
  action,
  children,
  onClick,
  ...props,
}) => {
  return (
    <button onClick={onClick} className={cx(styles.btn, [className])}>
      {children}
    </button>
  );
}

export default Button;