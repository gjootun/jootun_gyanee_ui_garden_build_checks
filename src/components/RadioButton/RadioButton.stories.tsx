import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  // Controls panel: change the label, background colour and disabled state
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof RadioButton>;

// Default state
export const Default: Story = { args: { label: 'Choice 1', name: 'group1' } };

// Disabled state (grey background + not-allowed cursor)
export const Disabled: Story = {
  args: { label: 'Choice 1', name: 'group1', disabled: true },
};
