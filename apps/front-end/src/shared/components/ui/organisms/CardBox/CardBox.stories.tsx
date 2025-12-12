import type { Meta, StoryObj } from '@storybook/react';
import CardBox from './CardBox';

const meta: Meta<typeof CardBox> = {
  title: 'UI/Organisms/CardBox',
  component: CardBox,
};

export const Primary: StoryObj<typeof CardBox> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
