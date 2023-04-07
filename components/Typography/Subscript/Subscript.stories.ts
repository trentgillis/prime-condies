import type { Meta, StoryObj } from '@storybook/react';

import { Subscript as SubscriptComponent } from './Subscript';

const meta: Meta<typeof SubscriptComponent> = {
  title: 'Typography',
  component: SubscriptComponent,
};

export default meta;
type Story = StoryObj<typeof SubscriptComponent>;

export const Subscript: Story = {
  args: {
    children: 'Finding the prime condies near you!',
  },
};
