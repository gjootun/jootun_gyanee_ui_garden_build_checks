import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from '../Table';
import TableFooter from './TableFooter';
import TableRow from '../TableRow';
import TableCell from '../TableCell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  // A <tfoot> must live inside a <table>
  decorators: [
    (Story) => (
      <Table>
        <Story />
      </Table>
    ),
  ],
};
export default meta; // required default export
type Story = StoryObj<typeof TableFooter>;

// One row spanning two columns
const row = (
  <TableRow>
    <TableCell colSpan={2}>Footer text</TableCell>
  </TableRow>
);

export const Default: Story = { args: { children: row } };
export const Disabled: Story = { args: { children: row, disabled: true } };
