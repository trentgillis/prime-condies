import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { MistIcon as MistIconComponent } from './MistIcon';

const meta: Meta<typeof MistIconComponent> = {
  title: 'Weather Icons/Icons',
  component: MistIconComponent,
};

export default meta;
type Story = StoryObj<typeof MistIconComponent>;

export const MistIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
