import React from 'react';
import classNames from 'classnames/bind';
import type { ButtonProps } from './Button.types';
import css from './Button.scss';

const cn = classNames.bind(css);

const Button = ({ color, disabled, text, onClick }: ButtonProps) => {
  const btnClasses = cn('button', {
    'button--disabled': disabled,
    'button--primary': color === 'Primary',
    'button--secondary': color === 'Secondary',
  });

  return (
    <button className={btnClasses} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export { Button, type ButtonProps };
