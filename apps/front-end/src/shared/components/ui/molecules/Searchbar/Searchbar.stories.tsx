import type { Meta, StoryObj } from '@storybook/react';
import Searchbar from './Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'UI/Molecules/Searchbar',
  component: Searchbar,
};

export const Primary: StoryObj<typeof Searchbar> = {
  args: {
    children: (
      <div className="flex flex-col">
        <h1>hi there</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, dolore.
        </p>
      </div>
    ),
  },
};

export default meta;
