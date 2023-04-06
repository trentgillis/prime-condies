import type { Meta, StoryObj } from '@storybook/react';

import { Header as HeaderComponent } from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof HeaderComponent> = {
  title: 'Typography',
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Header: Story = {
  args: {
    variant: 'H1',
    children: 'PrimeCondies',
  },
};
