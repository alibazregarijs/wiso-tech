import type { Meta, StoryObj } from '@storybook/react';

import IconBadge from './IconBadge';

const meta: Meta<typeof IconBadge> = {
  title: 'UI/Molecules/IconBadge',
  component: IconBadge,
};

export const Primary: StoryObj<typeof IconBadge> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
