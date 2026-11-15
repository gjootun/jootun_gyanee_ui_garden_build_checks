import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableFooter from './TableFooter';

// Render inside a real <table> so the HTML structure is valid
const wrap = (ui: React.ReactElement) => render(<table>{ui}</table>);

describe('TableFooter', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    wrap(
      <TableFooter>
        <tr>
          <td>Footer</td>
        </tr>
      </TableFooter>,
    );
    expect(screen.getByTestId('table-footer')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    wrap(
      <TableFooter backgroundColor="#eeeeee" disabled>
        <tr>
          <td>Footer</td>
        </tr>
      </TableFooter>,
    );
    expect(screen.getByTestId('table-footer')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});
