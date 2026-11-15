import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from '../Table';
import TableRow from './TableRow';
import TableCell from '../TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  // A <tr> must live inside <table><tbody>
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <Story />
        </tbody>
      </Table>
    ),
  ],
};
export default meta; // required default export
type Story = StoryObj<typeof TableRow>;

// Two cells inside the row
const cells = (
  <>
    <TableCell>Ana</TableCell>
    <TableCell>Developer</TableCell>
  </>
);

export const Default: Story = {
  args: { children: cells, backgroundColor: '#f5f5f5' },
};
export const Disabled: Story = {
  args: { children: cells, backgroundColor: '#f5f5f5', disabled: true },
};
