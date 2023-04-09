import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { SunnyIcon as SunnyIconComponent } from './SunnyIcon';

const meta: Meta<typeof SunnyIconComponent> = {
  title: 'Weather Icons/Icons',
  component: SunnyIconComponent,
};

export default meta;
type Story = StoryObj<typeof SunnyIconComponent>;

export const SunnyIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
