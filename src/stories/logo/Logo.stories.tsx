import React from 'react';
import { Logo } from './Logo';

const Presentation = () => {
  return <Logo />;
};

const Docs = {
  title: 'Logo',
  component: Logo,
};

const Story = {
  render: Presentation,
};

export { Docs as default, Story as Component };
