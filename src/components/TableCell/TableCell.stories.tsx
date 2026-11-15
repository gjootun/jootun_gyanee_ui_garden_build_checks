import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from '../Table';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  // A cell must live inside <table><tbody><tr>
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </Table>
    ),
  ],
};
export default meta; // required default export
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: { children: 'Cell content', backgroundColor: '#f5f5f5' },
};
export const Disabled: Story = {
  args: {
    children: 'Cell content',
    backgroundColor: '#f5f5f5',
    disabled: true,
  },
};
