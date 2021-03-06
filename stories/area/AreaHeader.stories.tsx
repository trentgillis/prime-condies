import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AreaHeader } from '@/components';

export default {
  title: 'Area/Desktop/Header',
  component: AreaHeader,
} as ComponentMeta<typeof AreaHeader>;

const Template: ComponentStory<typeof AreaHeader> = (args) => <AreaHeader {...args} />;

export const main = Template.bind({});
main.args = {
  areaName: 'Boulder Canyon',
  areaLocation: 'Colorado',
  areaCountry: 'US',
};
