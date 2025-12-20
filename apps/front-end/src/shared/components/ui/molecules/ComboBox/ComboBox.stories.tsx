import type { Meta, StoryObj } from '@storybook/react';

import ComboBox from './ComboBox';

const meta: Meta<typeof ComboBox> = {
  title: 'UI/Molecules/ComboBox',
  component: ComboBox,
};

export const Primary: StoryObj<typeof ComboBox> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
