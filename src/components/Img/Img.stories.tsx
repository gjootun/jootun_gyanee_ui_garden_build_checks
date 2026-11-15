import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  // Controls panel: change the alt text, background colour and disabled state
  argTypes: {
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Img>;

// Free placeholder photo used by the stories
const src = 'https://picsum.photos/400/250';

// Default state
export const Default: Story = { args: { src, alt: 'Sample image' } };

// Disabled state (grey, faded + not-allowed cursor)
export const Disabled: Story = {
  args: { src, alt: 'Sample image', disabled: true },
};
