import type { Meta, StoryObj } from '@storybook/react';

import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { PrecipitationIcon as PrecipitationIconComponent } from './PrecipitationIcon';

const meta: Meta<typeof PrecipitationIconComponent> = {
  title: 'Weather Info Icons/Icons',
  component: PrecipitationIconComponent,
};

export default meta;
type Story = StoryObj<typeof PrecipitationIconComponent>;

export const PrecipitationIcon: Story = {
  args: {
    size: 160,
    color: getColorFromColorCode('N800'),
  },
};
