import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoIcon } from '@/components';

export default {
  title: 'Common/InfoIcon',
  component: InfoIcon,
} as ComponentMeta<typeof InfoIcon>;

const Template: ComponentStory<typeof InfoIcon> = (args) => <InfoIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  iconName: 'humidity',
  size: 100,
};
