import type { Meta, StoryObj } from '@storybook/react';
import Searchbar from './Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'UI/Molecules/Searchbar',
  component: Searchbar,
};

export const Primary: StoryObj<typeof Searchbar> = {
  args: {},
};

export default meta;
