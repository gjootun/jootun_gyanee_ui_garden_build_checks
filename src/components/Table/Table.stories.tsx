import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';

// Meta = how the component appears in the Storybook sidebar
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  // Controls panel: change the background colour and disabled state
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta; // required default export
type Story = StoryObj<typeof Table>;

// A full table built from all four sub-components
const content = (
  <>
    <TableHeader>
      <TableRow>
        <TableCell header>Name</TableCell>
        <TableCell header>Role</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Ana</TableCell>
        <TableCell>Developer</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ben</TableCell>
        <TableCell>Designer</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>2 people</TableCell>
      </TableRow>
    </TableFooter>
  </>
);

// Default state
export const Default: Story = { args: { children: content } };

// Disabled state (grey background + not-allowed cursor)
export const Disabled: Story = { args: { children: content, disabled: true } };
