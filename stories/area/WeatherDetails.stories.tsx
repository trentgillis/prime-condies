import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WeatherDetails } from '@/components';

export default {
  title: 'Area/Desktop/WeatherDetails',
  component: WeatherDetails,
} as ComponentMeta<typeof WeatherDetails>;

const Template: ComponentStory<typeof WeatherDetails> = (args) => <WeatherDetails {...args} />;

export const main = Template.bind({});
main.args = {
  data: {
    rain: 17,
    humidity: 55,
    windSpeed: 12,
  },
};
