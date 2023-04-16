import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfSnowIcon as ChanceOfSnowIconComponent } from './ChanceOfSnowIcon';

const meta: Meta<typeof ChanceOfSnowIconComponent> = {
  title: 'Weather Icons/Icons',
  component: ChanceOfSnowIconComponent,
};

export default meta;
type Story = StoryObj<typeof ChanceOfSnowIconComponent>;

export const ChanceOfSnowIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
    variant: 'day',
  },
};
