import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfRain as ChanceOfRainComponent } from './ChanceOfRain';

const meta: Meta<typeof ChanceOfRainComponent> = {
  title: 'WeatherIcon/Icons',
  component: ChanceOfRainComponent,
};

export default meta;
type Story = StoryObj<typeof ChanceOfRainComponent>;

export const ChanceOfRain: Story = {
  args: {
    size: 80,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
