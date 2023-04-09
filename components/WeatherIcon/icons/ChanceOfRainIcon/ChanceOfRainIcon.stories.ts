import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfRainIcon as ChanceOfRainIconComponent } from './ChanceOfRainIcon';

const meta: Meta<typeof ChanceOfRainIconComponent> = {
  title: 'Weather Icons/Icons',
  component: ChanceOfRainIconComponent,
};

export default meta;
type Story = StoryObj<typeof ChanceOfRainIconComponent>;

export const ChanceOfRainIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
