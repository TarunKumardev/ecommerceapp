import { type Meta, type StoryObj } from '@storybook/react';
import Button from '.';
const meta: Meta = {
  title: 'atom/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Block: Story = {
  args: {
    children: 'button',
    variant: 'contained',
  },
};
