import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { RainIcon as RainIconComponent } from './RainIcon';

const meta: Meta<typeof RainIconComponent> = {
  title: 'Weather Icons/Icons',
  component: RainIconComponent,
};

export default meta;
type Story = StoryObj<typeof RainIconComponent>;

export const RainIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
