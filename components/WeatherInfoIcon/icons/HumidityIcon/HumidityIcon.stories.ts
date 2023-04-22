import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { HumidityIcon as HumidityIconComponent } from './HumidityIcon';

const meta: Meta<typeof HumidityIconComponent> = {
  title: 'Weather Info Icons/Icons',
  component: HumidityIconComponent,
};

export default meta;
type Story = StoryObj<typeof HumidityIconComponent>;

export const HumidityIcon: Story = {
  args: {
    size: 160,
    color: getColorFromColorCode('N800'),
  },
};
