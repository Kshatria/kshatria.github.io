import React from 'react';
import { Header, type HeaderProps } from './Header';
import { Logo } from '../logo';

const Presentation = (props: HeaderProps) => {
  return (
    <Header {...props}>
      <Logo />
    </Header>
  );
};

const HIDDEN = { table: { disable: true } };

const Docs = {
  title: 'Header',
  component: Header,
};

const Story = {
  argTypes: {
    children: HIDDEN,
  },
  render: Presentation,
};

export { Docs as default, Story as Component };
