import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { SnowIcon as SnowIconComponent } from './SnowIcon';

const meta: Meta<typeof SnowIconComponent> = {
  title: 'Weather Icons/Icons',
  component: SnowIconComponent,
};

export default meta;
type Story = StoryObj<typeof SnowIconComponent>;

export const SnowIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
