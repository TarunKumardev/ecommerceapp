import { type Meta, type StoryObj } from '@storybook/react';
import Button from '.';
const meta: Meta = {
  title: 'atom/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;
export const contained: Story = {
  args: {
    children: 'button',
    variant: 'contained',
  },
};

export const outlined: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
  },
};

export const text: Story = {
  args: {
    children: 'button',
    variant: 'text',
  },
};
