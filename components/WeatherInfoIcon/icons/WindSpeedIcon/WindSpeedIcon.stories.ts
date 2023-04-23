import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { WindSpeedIcon as WindSpeedIconComponent } from './WindSpeedIcon';

const meta: Meta<typeof WindSpeedIconComponent> = {
  title: 'Weather Info Icons/Icons',
  component: WindSpeedIconComponent,
};

export default meta;
type Story = StoryObj<typeof WindSpeedIconComponent>;

export const WindSpeedIcon: Story = {
  args: {
    size: 160,
    color: getColorFromColorCode('N800'),
  },
};
