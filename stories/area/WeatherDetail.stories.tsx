import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WeatherDetail } from '@/components';

export default {
  title: 'Area/Desktop/WeatherDetail',
  component: WeatherDetail,
} as ComponentMeta<typeof WeatherDetail>;

const Template: ComponentStory<typeof WeatherDetail> = (args) => <WeatherDetail {...args} />;

export const main = Template.bind({});
main.args = {
  value: 50,
  label: 'humidity',
  icon: 'humidity',
  unitLabel: '%',
};
