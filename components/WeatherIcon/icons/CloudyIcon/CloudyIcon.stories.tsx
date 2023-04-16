import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { CloudyIcon as CloudyIconComponent } from './CloudyIcon';

const meta: Meta<typeof CloudyIconComponent> = {
  title: 'Weather Icons/Icons',
  component: CloudyIconComponent,
};

export default meta;
type Story = StoryObj<typeof CloudyIconComponent>;

export const CloudyIcon: Story = {
  args: {
    size: 160,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
