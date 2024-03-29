import type { Meta, StoryObj } from '@storybook/react';

import { WeatherInfoIcon as WeatherInfoIconComponent } from './WeatherInfoIcon';

const meta: Meta<typeof WeatherInfoIconComponent> = {
  title: 'Weather Info Icons',
  component: WeatherInfoIconComponent,
};

export default meta;
type Story = StoryObj<typeof WeatherInfoIconComponent>;

export const WeatherInfoIcon: Story = {
  args: {
    icon: 'humidity',
    size: 160,
    colorCode: 'N800',
  },
};
