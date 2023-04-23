import type { Meta, StoryObj } from '@storybook/react';

import { AreaCard as AreaCardComponent } from './AreaCard';

const meta: Meta<typeof AreaCardComponent> = {
  title: 'Weather Info Icons',
  component: AreaCardComponent,
};

export default meta;
type Story = StoryObj<typeof AreaCardComponent>;

export const AreaCard: Story = {
  args: {
    weather: {},
  },
};
