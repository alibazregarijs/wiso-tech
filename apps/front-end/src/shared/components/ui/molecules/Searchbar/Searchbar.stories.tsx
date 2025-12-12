import type { Meta, StoryObj } from '@storybook/react';
import Searchbar from './Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'UI/Molecules/Searchbar',
  component: Searchbar,
};

export const Primary: StoryObj<typeof Searchbar> = {
  decorators: [
    (Story) => (
      <div className="max-w-md p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
