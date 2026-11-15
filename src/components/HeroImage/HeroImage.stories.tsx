import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  // Controls panel: change the title, background colour and disabled state
  argTypes: {
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof HeroImage>;

// Free placeholder photo used by the stories
const imageUrl = 'https://picsum.photos/1200/400';

// Default state
export const Default: Story = { args: { imageUrl, title: 'Welcome' } };

// Disabled state (grey, faded + not-allowed cursor)
export const Disabled: Story = {
  args: { imageUrl, title: 'Welcome', disabled: true },
};
