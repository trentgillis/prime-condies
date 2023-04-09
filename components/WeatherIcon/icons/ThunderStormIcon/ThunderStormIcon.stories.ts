import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ThunderStormIcon as ThunderStormIconComponent } from './ThunderStormIcon';

const meta: Meta<typeof ThunderStormIconComponent> = {
  title: 'Weather Icons/Icons',
  component: ThunderStormIconComponent,
};

export default meta;
type Story = StoryObj<typeof ThunderStormIconComponent>;

export const ThunderStormIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
