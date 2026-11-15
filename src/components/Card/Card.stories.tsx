import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  // Controls panel: change the text, background colour and disabled state
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Card>;

// Default state (with a picture)
export const Default: Story = {
  args: {
    title: 'Card title',
    content: 'Some card content goes here.',
    imageUrl: 'https://picsum.photos/400/200',
  },
};

// Disabled state (grey background + not-allowed cursor)
export const Disabled: Story = {
  args: {
    title: 'Card title',
    content: 'Some card content goes here.',
    disabled: true,
  },
};
