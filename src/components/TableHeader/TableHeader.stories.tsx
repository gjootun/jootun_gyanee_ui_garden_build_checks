import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from '../Table';
import TableHeader from './TableHeader';
import TableRow from '../TableRow';
import TableCell from '../TableCell';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  // A <thead> must live inside a <table>, so the decorator wraps the story in Table
  decorators: [
    (Story) => (
      <Table>
        <Story />
      </Table>
    ),
  ],
};
export default meta; // required default export
type Story = StoryObj<typeof TableHeader>;

// A row of header cells
const row = (
  <TableRow>
    <TableCell header>Name</TableCell>
    <TableCell header>Role</TableCell>
  </TableRow>
);

export const Default: Story = { args: { children: row } };
export const Disabled: Story = { args: { children: row, disabled: true } };
