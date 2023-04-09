import type { Meta, StoryObj } from '@storybook/react';

import { WeatherIcon as WeatherIconComponent } from './WeatherIcon';

const meta: Meta<typeof WeatherIconComponent> = {
  title: 'Weather Icons',
  component: WeatherIconComponent,
};

export default meta;
type Story = StoryObj<typeof WeatherIconComponent>;

export const WeatherIcon: Story = {
  args: {
    size: 80,
    colorCode: 'N800',
    strokeWidth: 2,
  },
};
