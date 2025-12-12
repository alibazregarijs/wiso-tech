import type { Meta, StoryObj } from '@storybook/react';
import CheckboxLabel from './CheckboxLabel';

const meta: Meta<typeof CheckboxLabel> = {
  title: 'UI/Molecules/CheckboxLabel',
  component: CheckboxLabel,
};

export const Primary: StoryObj<typeof CheckboxLabel> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
