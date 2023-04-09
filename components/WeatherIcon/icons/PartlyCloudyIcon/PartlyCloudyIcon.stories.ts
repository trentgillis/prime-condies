import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { PartlyCloudyIcon as PartlyCloudyIconComponent } from './PartlyCloudyIcon';

const meta: Meta<typeof PartlyCloudyIconComponent> = {
  title: 'Weather Icons/Icons',
  component: PartlyCloudyIconComponent,
};

export default meta;
type Story = StoryObj<typeof PartlyCloudyIconComponent>;

export const PartlyCloudyIcon: Story = {
  args: {
    size: 80,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
