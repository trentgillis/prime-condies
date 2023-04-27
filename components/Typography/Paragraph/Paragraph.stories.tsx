import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph as ParagraphComponent } from './Paragraph';

const meta: Meta<typeof ParagraphComponent> = {
  title: 'Typography',
  component: ParagraphComponent,
};

export default meta;
type Story = StoryObj<typeof ParagraphComponent>;

export const Paragraph: Story = {
  args: {
    variant: 'm',
    children: 'Finding the prime condies near you!',
  },
};
