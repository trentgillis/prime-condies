import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { PartlyCloudyIcon as PartlyCloudyComponent } from './PartlyCloudyIcon';

const meta: Meta<typeof PartlyCloudyComponent> = {
  title: 'WeatherIcon/Icons',
  component: PartlyCloudyComponent,
};

export default meta;
type Story = StoryObj<typeof PartlyCloudyComponent>;

export const PartlyCloudyIcon: Story = {
  args: {
    size: 80,
    strokeWidth: 2,
    color: getColorFromColorCode('N800'),
  },
};
