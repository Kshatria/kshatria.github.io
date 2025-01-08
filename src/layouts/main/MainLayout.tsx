import React from 'react';
import classNames from 'classnames/bind';
import css from './MainLayout.scss';
import { Header } from '../../stories/header';

const cn = classNames.bind(css);

const MainLayout = () => (
  <main className={cn('main-layout')}>
    <Header>Привет мир!</Header>
  </main>
);

export { MainLayout };
