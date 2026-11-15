import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell from './TableCell';

// Render inside a real <table><tbody><tr> so the HTML structure is valid
const wrap = (ui: React.ReactElement) =>
  render(
    <table>
      <tbody>
        <tr>{ui}</tr>
      </tbody>
    </table>,
  );

describe('TableCell', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    wrap(<TableCell>Cell</TableCell>);
    expect(screen.getByTestId('table-cell')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    wrap(
      <TableCell backgroundColor="#f5f5f5" disabled>
        Cell
      </TableCell>,
    );
    expect(screen.getByTestId('table-cell')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});
