import React from 'react';
import { Informer, type InformerProps } from '@/widgets';

const Presentation = (props: InformerProps) => {
  return <Informer {...props} />;
};

const Docs = {
  title: 'Informer',
  component: Informer,
};

const Story = {
  render: Presentation,
  args: {
    category: 'Social Mediat',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Total profit',
    sum: 500,
  },
};

export { Docs as default, Story as Component };
