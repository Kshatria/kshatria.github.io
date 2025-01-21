import React from 'react';
import classNames from 'classnames/bind';
import type { HeaderProps } from './Header.types';
import css from './Header.scss';

const cn = classNames.bind(css);

const Header = ({ children }: HeaderProps) => {
  return <header className={cn('header')}>{children}</header>;
};

export { Header, type HeaderProps };
