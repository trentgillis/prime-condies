import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WeatherIcon } from '@/components';

export default {
  title: 'Common/WeatherIcon',
  component: WeatherIcon,
} as ComponentMeta<typeof WeatherIcon>;

const Template: ComponentStory<typeof WeatherIcon> = (args) => <WeatherIcon {...args} />;

export const main = Template.bind({});
main.args = {
  iconName: 'partlyCloudy',
  size: 100,
};
