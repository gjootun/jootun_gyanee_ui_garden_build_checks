import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  // Controls panel: change the text, colour and disabled state
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Label>;

// Default state
export const Default: Story = { args: { text: 'Name' } };

// Disabled state (grey text + not-allowed cursor)
export const Disabled: Story = { args: { text: 'Name', disabled: true } };
