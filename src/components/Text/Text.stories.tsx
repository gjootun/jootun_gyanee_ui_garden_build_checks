import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  // Controls panel: change the text, colour and disabled state
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Text>;

// Default state
export const Default: Story = { args: { text: 'Some paragraph text' } };

// Disabled state (grey text + not-allowed cursor)
export const Disabled: Story = {
  args: { text: 'Some paragraph text', disabled: true },
};
