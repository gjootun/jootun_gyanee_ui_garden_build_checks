import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  // argTypes create the "Controls" panel (change text / colour / disabled)
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Button>;

// Default state
export const Default: Story = {
  args: { label: 'Click me', backgroundColor: '#0066cc' },
};

// Disabled state (greyed out + not-allowed cursor)
export const Disabled: Story = {
  args: { label: 'Click me', disabled: true },
};
