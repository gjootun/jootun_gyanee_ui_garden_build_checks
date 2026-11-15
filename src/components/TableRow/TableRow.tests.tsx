import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';

// Render inside a real <table><tbody> so the HTML structure is valid
const wrap = (ui: React.ReactElement) =>
  render(
    <table>
      <tbody>{ui}</tbody>
    </table>,
  );

describe('TableRow', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    wrap(
      <TableRow>
        <td>Cell</td>
      </TableRow>,
    );
    expect(screen.getByTestId('table-row')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    wrap(
      <TableRow backgroundColor="#f5f5f5" disabled>
        <td>Cell</td>
      </TableRow>,
    );
    expect(screen.getByTestId('table-row')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});
