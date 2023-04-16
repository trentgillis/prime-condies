import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ClearSkyIcon as ClearSkyIconComponent } from './ClearSkyIcon';

const meta: Meta<typeof ClearSkyIconComponent> = {
  title: 'Weather Icons/Icons',
  component: ClearSkyIconComponent,
};

export default meta;
type Story = StoryObj<typeof ClearSkyIconComponent>;

export const ClearSkyIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
    variant: 'day',
  },
};
