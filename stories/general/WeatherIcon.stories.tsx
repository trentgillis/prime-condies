import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WeatherIcon } from '@/components';

export default {
  title: 'General/WeatherIcon',
  component: WeatherIcon,
} as ComponentMeta<typeof WeatherIcon>;

const Template: ComponentStory<typeof WeatherIcon> = (args) => <WeatherIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  iconName: 'partlyCloudy',
  size: 100,
};
