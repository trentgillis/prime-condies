import type { Meta, StoryObj } from '@storybook/react';

import { Header as HeaderComponent } from './Header';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Typography',
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  args: {
    variant: 'H1',
    children: 'PrimeCondies',
  },
};
