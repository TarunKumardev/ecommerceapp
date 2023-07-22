import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta: Meta = {
  title: 'atom/Typography',
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Block: Story = {
  args: {
    children: 'Hello world',
    variant: 'heading1',
    fontWeight: 'bolder',
  },
};
