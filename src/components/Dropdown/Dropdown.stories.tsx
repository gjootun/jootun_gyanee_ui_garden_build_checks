import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';

// Sample choices used by the stories
const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
];

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  // Controls panel: change the background colour and disabled state
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Dropdown>;

// Default state
export const Default: Story = { args: { options, backgroundColor: '#ffffff' } };

// Disabled state (grey background + not-allowed cursor)
export const Disabled: Story = { args: { options, disabled: true } };
