import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/Molecules/ProgressBar',
  component: ProgressBar,
};

export const Primary: StoryObj<typeof ProgressBar> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
