import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta: Meta = {
  title: 'atom/Typography',
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const heading1: Story = {
  args: {
    children: 'Hello world',
    variant: 'heading1',
    fontWeight: 'bolder',
  },
};

export const heading2: Story = {
  args: {
    children: 'Hello world',
    variant: 'heading2',
    fontWeight: 'bolder',
  },
};

export const heading3: Story = {
  args: {
    children: 'Hello world',
    variant: 'heading3',
    fontWeight: 'bolder',
  },
};
export const label: Story = {
  args: {
    children: 'Hello world',
    variant: 'label',
    fontWeight: 'bolder',
  },
};
export const paragraph: Story = {
  args: {
    children: 'Hello world',
    variant: 'paragraph',
    fontWeight: 'bolder',
  },
};
