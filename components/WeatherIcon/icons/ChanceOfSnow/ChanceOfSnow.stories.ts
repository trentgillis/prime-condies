import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfSnow as ChanceOfSnowComponent } from './ChanceOfSnow';

const meta: Meta<typeof ChanceOfSnowComponent> = {
  title: 'WeatherIcon/Icons',
  component: ChanceOfSnowComponent,
};

export default meta;
type Story = StoryObj<typeof ChanceOfSnowComponent>;

export const ChanceOfSnow: Story = {
  args: {
    size: 80,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
